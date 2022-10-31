package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBotPathParams struct {
	BotID string `pathParam:"style=simple,explode=false,name=botId"`
}

type UpdateBotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateBotRequestBodyDataPrivacy struct {
	ChildDirected *bool `json:"childDirected,omitempty"`
}

type UpdateBotRequestBody struct {
	BotName                 string                          `json:"botName"`
	DataPrivacy             UpdateBotRequestBodyDataPrivacy `json:"dataPrivacy"`
	Description             *string                         `json:"description,omitempty"`
	IdleSessionTTLInSeconds int64                           `json:"idleSessionTTLInSeconds"`
	RoleArn                 string                          `json:"roleArn"`
}

type UpdateBotRequest struct {
	PathParams UpdateBotPathParams
	Headers    UpdateBotHeaders
	Request    UpdateBotRequestBody `request:"mediaType=application/json"`
}

type UpdateBotResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateBotResponse             *shared.UpdateBotResponse
	ValidationException           *interface{}
}
