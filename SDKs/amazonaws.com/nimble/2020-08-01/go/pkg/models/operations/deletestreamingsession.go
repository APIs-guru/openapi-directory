package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStreamingSessionPathParams struct {
	SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
	StudioID  string `pathParam:"style=simple,explode=false,name=studioId"`
}

type DeleteStreamingSessionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteStreamingSessionRequest struct {
	PathParams DeleteStreamingSessionPathParams
	Headers    DeleteStreamingSessionHeaders
}

type DeleteStreamingSessionResponse struct {
	AccessDeniedException          *interface{}
	ConflictException              *interface{}
	ContentType                    string
	DeleteStreamingSessionResponse *shared.DeleteStreamingSessionResponse
	InternalServerErrorException   *interface{}
	ResourceNotFoundException      *interface{}
	ServiceQuotaExceededException  *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
