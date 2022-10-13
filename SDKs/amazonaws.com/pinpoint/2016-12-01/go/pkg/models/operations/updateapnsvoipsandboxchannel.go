package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApnsVoipSandboxChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateApnsVoipSandboxChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest struct {
	BundleID                    *string `json:"BundleId"`
	Certificate                 *string `json:"Certificate"`
	DefaultAuthenticationMethod *string `json:"DefaultAuthenticationMethod"`
	Enabled                     *bool   `json:"Enabled"`
	PrivateKey                  *string `json:"PrivateKey"`
	TeamID                      *string `json:"TeamId"`
	TokenKey                    *string `json:"TokenKey"`
	TokenKeyID                  *string `json:"TokenKeyId"`
}

type UpdateApnsVoipSandboxChannelRequestBody struct {
	ApnsVoipSandboxChannelRequest UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest `json:"APNSVoipSandboxChannelRequest"`
}

type UpdateApnsVoipSandboxChannelRequest struct {
	PathParams UpdateApnsVoipSandboxChannelPathParams
	Headers    UpdateApnsVoipSandboxChannelHeaders
	Request    UpdateApnsVoipSandboxChannelRequestBody `request:"mediaType=application/json"`
}

type UpdateApnsVoipSandboxChannelResponse struct {
	BadRequestException                  *interface{}
	ContentType                          string
	ForbiddenException                   *interface{}
	InternalServerErrorException         *interface{}
	MethodNotAllowedException            *interface{}
	NotFoundException                    *interface{}
	PayloadTooLargeException             *interface{}
	StatusCode                           int64
	TooManyRequestsException             *interface{}
	UpdateApnsVoipSandboxChannelResponse *shared.UpdateApnsVoipSandboxChannelResponse
}
