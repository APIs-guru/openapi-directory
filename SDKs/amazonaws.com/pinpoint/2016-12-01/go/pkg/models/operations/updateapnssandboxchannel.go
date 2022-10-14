package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApnsSandboxChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateApnsSandboxChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest struct {
	BundleID                    *string `json:"BundleId,omitempty"`
	Certificate                 *string `json:"Certificate,omitempty"`
	DefaultAuthenticationMethod *string `json:"DefaultAuthenticationMethod,omitempty"`
	Enabled                     *bool   `json:"Enabled,omitempty"`
	PrivateKey                  *string `json:"PrivateKey,omitempty"`
	TeamID                      *string `json:"TeamId,omitempty"`
	TokenKey                    *string `json:"TokenKey,omitempty"`
	TokenKeyID                  *string `json:"TokenKeyId,omitempty"`
}

type UpdateApnsSandboxChannelRequestBody struct {
	ApnsSandboxChannelRequest UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest `json:"APNSSandboxChannelRequest"`
}

type UpdateApnsSandboxChannelRequest struct {
	PathParams UpdateApnsSandboxChannelPathParams
	Headers    UpdateApnsSandboxChannelHeaders
	Request    UpdateApnsSandboxChannelRequestBody `request:"mediaType=application/json"`
}

type UpdateApnsSandboxChannelResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	ForbiddenException               *interface{}
	InternalServerErrorException     *interface{}
	MethodNotAllowedException        *interface{}
	NotFoundException                *interface{}
	PayloadTooLargeException         *interface{}
	StatusCode                       int64
	TooManyRequestsException         *interface{}
	UpdateApnsSandboxChannelResponse *shared.UpdateApnsSandboxChannelResponse
}
