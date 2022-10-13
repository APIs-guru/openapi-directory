package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApnsChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateApnsChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateApnsChannelRequestBodyApnsChannelRequest struct {
	BundleID                    *string `json:"BundleId"`
	Certificate                 *string `json:"Certificate"`
	DefaultAuthenticationMethod *string `json:"DefaultAuthenticationMethod"`
	Enabled                     *bool   `json:"Enabled"`
	PrivateKey                  *string `json:"PrivateKey"`
	TeamID                      *string `json:"TeamId"`
	TokenKey                    *string `json:"TokenKey"`
	TokenKeyID                  *string `json:"TokenKeyId"`
}

type UpdateApnsChannelRequestBody struct {
	ApnsChannelRequest UpdateApnsChannelRequestBodyApnsChannelRequest `json:"APNSChannelRequest"`
}

type UpdateApnsChannelRequest struct {
	PathParams UpdateApnsChannelPathParams
	Headers    UpdateApnsChannelHeaders
	Request    UpdateApnsChannelRequestBody `request:"mediaType=application/json"`
}

type UpdateApnsChannelResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateApnsChannelResponse    *shared.UpdateApnsChannelResponse
}
