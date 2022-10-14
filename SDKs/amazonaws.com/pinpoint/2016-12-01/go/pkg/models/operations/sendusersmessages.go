package operations

import (
	"openapi/pkg/models/shared"
)

type SendUsersMessagesPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type SendUsersMessagesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SendUsersMessagesRequestBodySendUsersMessageRequest struct {
	Context               map[string]string                           `json:"Context,omitempty"`
	MessageConfiguration  *shared.DirectMessageConfiguration          `json:"MessageConfiguration,omitempty"`
	TemplateConfiguration *shared.TemplateConfiguration               `json:"TemplateConfiguration,omitempty"`
	TraceID               *string                                     `json:"TraceId,omitempty"`
	Users                 map[string]shared.EndpointSendConfiguration `json:"Users,omitempty"`
}

type SendUsersMessagesRequestBody struct {
	SendUsersMessageRequest SendUsersMessagesRequestBodySendUsersMessageRequest `json:"SendUsersMessageRequest"`
}

type SendUsersMessagesRequest struct {
	PathParams SendUsersMessagesPathParams
	Headers    SendUsersMessagesHeaders
	Request    SendUsersMessagesRequestBody `request:"mediaType=application/json"`
}

type SendUsersMessagesResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	SendUsersMessagesResponse    *shared.SendUsersMessagesResponse
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
