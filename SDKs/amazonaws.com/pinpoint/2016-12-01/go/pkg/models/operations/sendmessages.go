package operations

import (
	"openapi/pkg/models/shared"
)

type SendMessagesPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type SendMessagesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type SendMessagesRequestBodyMessageRequest struct {
	Addresses             map[string]shared.AddressConfiguration      `json:"Addresses,omitempty"`
	Context               map[string]string                           `json:"Context,omitempty"`
	Endpoints             map[string]shared.EndpointSendConfiguration `json:"Endpoints,omitempty"`
	MessageConfiguration  *shared.DirectMessageConfiguration          `json:"MessageConfiguration,omitempty"`
	TemplateConfiguration *shared.TemplateConfiguration               `json:"TemplateConfiguration,omitempty"`
	TraceID               *string                                     `json:"TraceId,omitempty"`
}

type SendMessagesRequestBody struct {
	MessageRequest SendMessagesRequestBodyMessageRequest `json:"MessageRequest"`
}

type SendMessagesRequest struct {
	PathParams SendMessagesPathParams
	Headers    SendMessagesHeaders
	Request    SendMessagesRequestBody `request:"mediaType=application/json"`
}

type SendMessagesResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	SendMessagesResponse         *shared.SendMessagesResponse
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
