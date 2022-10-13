package operations

import (
	"openapi/pkg/models/shared"
)

type SendMessagesPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type SendMessagesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SendMessagesRequestBodyMessageRequest struct {
	Addresses             map[string]shared.AddressConfiguration      `json:"Addresses"`
	Context               map[string]string                           `json:"Context"`
	Endpoints             map[string]shared.EndpointSendConfiguration `json:"Endpoints"`
	MessageConfiguration  *shared.DirectMessageConfiguration          `json:"MessageConfiguration"`
	TemplateConfiguration *shared.TemplateConfiguration               `json:"TemplateConfiguration"`
	TraceID               *string                                     `json:"TraceId"`
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
