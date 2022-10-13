package operations

import (
	"openapi/pkg/models/shared"
)

type PutTraceSegmentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutTraceSegmentsRequestBody struct {
	TraceSegmentDocuments []string `json:"TraceSegmentDocuments"`
}

type PutTraceSegmentsRequest struct {
	Headers PutTraceSegmentsHeaders
	Request PutTraceSegmentsRequestBody `request:"mediaType=application/json"`
}

type PutTraceSegmentsResponse struct {
	ContentType             string
	InvalidRequestException *interface{}
	PutTraceSegmentsResult  *shared.PutTraceSegmentsResult
	StatusCode              int64
	ThrottledException      *interface{}
}
