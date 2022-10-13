package operations

import (
	"openapi/pkg/models/shared"
)

type PutBotAliasPathParams struct {
	BotName string `pathParam:"style=simple,explode=false,name=botName"`
	Name    string `pathParam:"style=simple,explode=false,name=name"`
}

type PutBotAliasHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutBotAliasRequestBodyConversationLogs struct {
	IamRoleArn  *string                     `json:"iamRoleArn"`
	LogSettings []shared.LogSettingsRequest `json:"logSettings"`
}

type PutBotAliasRequestBody struct {
	BotVersion       string                                  `json:"botVersion"`
	Checksum         *string                                 `json:"checksum"`
	ConversationLogs *PutBotAliasRequestBodyConversationLogs `json:"conversationLogs"`
	Description      *string                                 `json:"description"`
	Tags             []shared.Tag                            `json:"tags"`
}

type PutBotAliasRequest struct {
	PathParams PutBotAliasPathParams
	Headers    PutBotAliasHeaders
	Request    PutBotAliasRequestBody `request:"mediaType=application/json"`
}

type PutBotAliasResponse struct {
	BadRequestException         *interface{}
	ConflictException           *interface{}
	ContentType                 string
	InternalFailureException    *interface{}
	LimitExceededException      *interface{}
	PreconditionFailedException *interface{}
	PutBotAliasResponse         *shared.PutBotAliasResponse
	StatusCode                  int64
}
