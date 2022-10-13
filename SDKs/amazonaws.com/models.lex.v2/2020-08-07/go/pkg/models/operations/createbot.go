package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateBotRequestBodyDataPrivacy struct {
	ChildDirected *bool `json:"childDirected"`
}

type CreateBotRequestBody struct {
	BotName                 string                          `json:"botName"`
	BotTags                 map[string]string               `json:"botTags"`
	DataPrivacy             CreateBotRequestBodyDataPrivacy `json:"dataPrivacy"`
	Description             *string                         `json:"description"`
	IdleSessionTTLInSeconds int64                           `json:"idleSessionTTLInSeconds"`
	RoleArn                 string                          `json:"roleArn"`
	TestBotAliasTags        map[string]string               `json:"testBotAliasTags"`
}

type CreateBotRequest struct {
	Headers CreateBotHeaders
	Request CreateBotRequestBody `request:"mediaType=application/json"`
}

type CreateBotResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	CreateBotResponse             *shared.CreateBotResponse
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
