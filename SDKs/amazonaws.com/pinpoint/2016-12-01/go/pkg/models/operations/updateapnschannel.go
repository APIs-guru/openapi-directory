package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApnsChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateApnsChannelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateApnsChannelRequestBodyApnsChannelRequest
// Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.
type UpdateApnsChannelRequestBodyApnsChannelRequest struct {
	BundleID                    *string `json:"BundleId,omitempty"`
	Certificate                 *string `json:"Certificate,omitempty"`
	DefaultAuthenticationMethod *string `json:"DefaultAuthenticationMethod,omitempty"`
	Enabled                     *bool   `json:"Enabled,omitempty"`
	PrivateKey                  *string `json:"PrivateKey,omitempty"`
	TeamID                      *string `json:"TeamId,omitempty"`
	TokenKey                    *string `json:"TokenKey,omitempty"`
	TokenKeyID                  *string `json:"TokenKeyId,omitempty"`
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
