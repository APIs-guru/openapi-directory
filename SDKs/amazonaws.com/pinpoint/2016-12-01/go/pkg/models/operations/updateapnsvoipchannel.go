package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApnsVoipChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateApnsVoipChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest struct {
	BundleID                    *string `json:"BundleId,omitempty"`
	Certificate                 *string `json:"Certificate,omitempty"`
	DefaultAuthenticationMethod *string `json:"DefaultAuthenticationMethod,omitempty"`
	Enabled                     *bool   `json:"Enabled,omitempty"`
	PrivateKey                  *string `json:"PrivateKey,omitempty"`
	TeamID                      *string `json:"TeamId,omitempty"`
	TokenKey                    *string `json:"TokenKey,omitempty"`
	TokenKeyID                  *string `json:"TokenKeyId,omitempty"`
}

type UpdateApnsVoipChannelRequestBody struct {
	ApnsVoipChannelRequest UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest `json:"APNSVoipChannelRequest"`
}

type UpdateApnsVoipChannelRequest struct {
	PathParams UpdateApnsVoipChannelPathParams
	Headers    UpdateApnsVoipChannelHeaders
	Request    UpdateApnsVoipChannelRequestBody `request:"mediaType=application/json"`
}

type UpdateApnsVoipChannelResponse struct {
	BadRequestException           *interface{}
	ContentType                   string
	ForbiddenException            *interface{}
	InternalServerErrorException  *interface{}
	MethodNotAllowedException     *interface{}
	NotFoundException             *interface{}
	PayloadTooLargeException      *interface{}
	StatusCode                    int64
	TooManyRequestsException      *interface{}
	UpdateApnsVoipChannelResponse *shared.UpdateApnsVoipChannelResponse
}
