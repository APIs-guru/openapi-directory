package operations

import (
	"openapi/pkg/models/shared"
)

type GetStreamingSessionPathParams struct {
	SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
	StudioID  string `pathParam:"style=simple,explode=false,name=studioId"`
}

type GetStreamingSessionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetStreamingSessionRequest struct {
	PathParams GetStreamingSessionPathParams
	Headers    GetStreamingSessionHeaders
}

type GetStreamingSessionResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	GetStreamingSessionResponse   *shared.GetStreamingSessionResponse
	InternalServerErrorException  *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
