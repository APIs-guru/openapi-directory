package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeExecutionPathParams struct {
	ManagedDeviceID string `pathParam:"style=simple,explode=false,name=managedDeviceId"`
	TaskID          string `pathParam:"style=simple,explode=false,name=taskId"`
}

type DescribeExecutionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeExecutionRequest struct {
	PathParams DescribeExecutionPathParams
	Headers    DescribeExecutionHeaders
}

type DescribeExecutionResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeExecutionOutput   *shared.DescribeExecutionOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
