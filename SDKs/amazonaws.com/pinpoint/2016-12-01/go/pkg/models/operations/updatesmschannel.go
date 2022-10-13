package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSmsChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateSmsChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateSmsChannelRequestBodySmsChannelRequest struct {
	Enabled   *bool   `json:"Enabled"`
	SenderID  *string `json:"SenderId"`
	ShortCode *string `json:"ShortCode"`
}

type UpdateSmsChannelRequestBody struct {
	SmsChannelRequest UpdateSmsChannelRequestBodySmsChannelRequest `json:"SMSChannelRequest"`
}

type UpdateSmsChannelRequest struct {
	PathParams UpdateSmsChannelPathParams
	Headers    UpdateSmsChannelHeaders
	Request    UpdateSmsChannelRequestBody `request:"mediaType=application/json"`
}

type UpdateSmsChannelResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateSmsChannelResponse     *shared.UpdateSmsChannelResponse
}
