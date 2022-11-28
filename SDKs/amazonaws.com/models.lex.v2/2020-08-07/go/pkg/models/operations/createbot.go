package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateBotRequestBodyDataPrivacy
// By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
type CreateBotRequestBodyDataPrivacy struct {
	ChildDirected *bool `json:"childDirected,omitempty"`
}

type CreateBotRequestBody struct {
	BotName                 string                          `json:"botName"`
	BotTags                 map[string]string               `json:"botTags,omitempty"`
	DataPrivacy             CreateBotRequestBodyDataPrivacy `json:"dataPrivacy"`
	Description             *string                         `json:"description,omitempty"`
	IdleSessionTTLInSeconds int64                           `json:"idleSessionTTLInSeconds"`
	RoleArn                 string                          `json:"roleArn"`
	TestBotAliasTags        map[string]string               `json:"testBotAliasTags,omitempty"`
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
