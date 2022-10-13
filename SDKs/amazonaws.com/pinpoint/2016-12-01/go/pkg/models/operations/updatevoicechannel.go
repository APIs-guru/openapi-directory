package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVoiceChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateVoiceChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateVoiceChannelRequestBodyVoiceChannelRequest struct {
	Enabled *bool `json:"Enabled"`
}

type UpdateVoiceChannelRequestBody struct {
	VoiceChannelRequest UpdateVoiceChannelRequestBodyVoiceChannelRequest `json:"VoiceChannelRequest"`
}

type UpdateVoiceChannelRequest struct {
	PathParams UpdateVoiceChannelPathParams
	Headers    UpdateVoiceChannelHeaders
	Request    UpdateVoiceChannelRequestBody `request:"mediaType=application/json"`
}

type UpdateVoiceChannelResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateVoiceChannelResponse   *shared.UpdateVoiceChannelResponse
}
