package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGcmChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateGcmChannelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateGcmChannelRequestBodyGcmChannelRequest
// Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
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
