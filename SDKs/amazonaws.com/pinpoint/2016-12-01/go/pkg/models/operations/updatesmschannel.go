package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSmsChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateSmsChannelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateSmsChannelRequestBodySmsChannelRequest
// Specifies the status and settings of the SMS channel for an application.
type UpdateSmsChannelRequestBodySmsChannelRequest struct {
	Enabled   *bool   `json:"Enabled,omitempty"`
	SenderID  *string `json:"SenderId,omitempty"`
	ShortCode *string `json:"ShortCode,omitempty"`
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
