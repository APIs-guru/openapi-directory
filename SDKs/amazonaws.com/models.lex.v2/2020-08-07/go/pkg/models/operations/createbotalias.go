package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBotAliasPathParams struct {
	BotID string `pathParam:"style=simple,explode=false,name=botId"`
}

type CreateBotAliasHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateBotAliasRequestBodyConversationLogSettings struct {
	AudioLogSettings []shared.AudioLogSetting `json:"audioLogSettings"`
	TextLogSettings  []shared.TextLogSetting  `json:"textLogSettings"`
}

type CreateBotAliasRequestBodySentimentAnalysisSettings struct {
	DetectSentiment *bool `json:"detectSentiment"`
}

type CreateBotAliasRequestBody struct {
	BotAliasLocaleSettings    map[string]shared.BotAliasLocaleSettings            `json:"botAliasLocaleSettings"`
	BotAliasName              string                                              `json:"botAliasName"`
	BotVersion                *string                                             `json:"botVersion"`
	ConversationLogSettings   *CreateBotAliasRequestBodyConversationLogSettings   `json:"conversationLogSettings"`
	Description               *string                                             `json:"description"`
	SentimentAnalysisSettings *CreateBotAliasRequestBodySentimentAnalysisSettings `json:"sentimentAnalysisSettings"`
	Tags                      map[string]string                                   `json:"tags"`
}

type CreateBotAliasRequest struct {
	PathParams CreateBotAliasPathParams
	Headers    CreateBotAliasHeaders
	Request    CreateBotAliasRequestBody `request:"mediaType=application/json"`
}

type CreateBotAliasResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	CreateBotAliasResponse        *shared.CreateBotAliasResponse
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
