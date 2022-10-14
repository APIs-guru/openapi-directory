package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStreamingSessionStreamPathParams struct {
	SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
	StudioID  string `pathParam:"style=simple,explode=false,name=studioId"`
}

type CreateStreamingSessionStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateStreamingSessionStreamRequestBody struct {
	ExpirationInSeconds *int64 `json:"expirationInSeconds,omitempty"`
}

type CreateStreamingSessionStreamRequest struct {
	PathParams CreateStreamingSessionStreamPathParams
	Headers    CreateStreamingSessionStreamHeaders
	Request    CreateStreamingSessionStreamRequestBody `request:"mediaType=application/json"`
}

type CreateStreamingSessionStreamResponse struct {
	AccessDeniedException                *interface{}
	ConflictException                    *interface{}
	ContentType                          string
	CreateStreamingSessionStreamResponse *shared.CreateStreamingSessionStreamResponse
	InternalServerErrorException         *interface{}
	ResourceNotFoundException            *interface{}
	ServiceQuotaExceededException        *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
	ValidationException                  *interface{}
}
