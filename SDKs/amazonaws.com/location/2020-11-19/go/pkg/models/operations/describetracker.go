package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTrackerPathParams struct {
	TrackerName string `pathParam:"style=simple,explode=false,name=TrackerName"`
}

type DescribeTrackerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeTrackerRequest struct {
	PathParams DescribeTrackerPathParams
	Headers    DescribeTrackerHeaders
}

type DescribeTrackerResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeTrackerResponse   *shared.DescribeTrackerResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
