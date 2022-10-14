package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGcmChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateGcmChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateGcmChannelRequestBodyGcmChannelRequest struct {
	APIKey  *string `json:"ApiKey,omitempty"`
	Enabled *bool   `json:"Enabled,omitempty"`
}

type UpdateGcmChannelRequestBody struct {
	GcmChannelRequest UpdateGcmChannelRequestBodyGcmChannelRequest `json:"GCMChannelRequest"`
}

type UpdateGcmChannelRequest struct {
	PathParams UpdateGcmChannelPathParams
	Headers    UpdateGcmChannelHeaders
	Request    UpdateGcmChannelRequestBody `request:"mediaType=application/json"`
}

type UpdateGcmChannelResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateGcmChannelResponse     *shared.UpdateGcmChannelResponse
}
