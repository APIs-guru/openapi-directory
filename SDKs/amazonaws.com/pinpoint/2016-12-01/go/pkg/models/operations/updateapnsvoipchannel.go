package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApnsVoipChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateApnsVoipChannelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest
// Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
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
