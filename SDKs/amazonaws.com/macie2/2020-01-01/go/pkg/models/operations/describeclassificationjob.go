package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeClassificationJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type DescribeClassificationJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeClassificationJobRequest struct {
	PathParams DescribeClassificationJobPathParams
	Headers    DescribeClassificationJobHeaders
}

type DescribeClassificationJobResponse struct {
	AccessDeniedException             *interface{}
	ConflictException                 *interface{}
	ContentType                       string
	DescribeClassificationJobResponse *shared.DescribeClassificationJobResponse
	InternalServerException           *interface{}
	ResourceNotFoundException         *interface{}
	ServiceQuotaExceededException     *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	ValidationException               *interface{}
}
