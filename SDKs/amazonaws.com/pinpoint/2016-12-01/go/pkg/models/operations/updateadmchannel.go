package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAdmChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateAdmChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAdmChannelRequestBodyAdmChannelRequest struct {
	ClientID     *string `json:"ClientId,omitempty"`
	ClientSecret *string `json:"ClientSecret,omitempty"`
	Enabled      *bool   `json:"Enabled,omitempty"`
}

type UpdateAdmChannelRequestBody struct {
	AdmChannelRequest UpdateAdmChannelRequestBodyAdmChannelRequest `json:"ADMChannelRequest"`
}

type UpdateAdmChannelRequest struct {
	PathParams UpdateAdmChannelPathParams
	Headers    UpdateAdmChannelHeaders
	Request    UpdateAdmChannelRequestBody `request:"mediaType=application/json"`
}

type UpdateAdmChannelResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateAdmChannelResponse     *shared.UpdateAdmChannelResponse
}
