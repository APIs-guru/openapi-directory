package operations

import (
	"openapi/pkg/models/shared"
)

type GetStreamingSessionStreamPathParams struct {
	SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
	StreamID  string `pathParam:"style=simple,explode=false,name=streamId"`
	StudioID  string `pathParam:"style=simple,explode=false,name=studioId"`
}

type GetStreamingSessionStreamHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetStreamingSessionStreamRequest struct {
	PathParams GetStreamingSessionStreamPathParams
	Headers    GetStreamingSessionStreamHeaders
}

type GetStreamingSessionStreamResponse struct {
	AccessDeniedException             *interface{}
	ConflictException                 *interface{}
	ContentType                       string
	GetStreamingSessionStreamResponse *shared.GetStreamingSessionStreamResponse
	InternalServerErrorException      *interface{}
	ResourceNotFoundException         *interface{}
	ServiceQuotaExceededException     *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	ValidationException               *interface{}
}
