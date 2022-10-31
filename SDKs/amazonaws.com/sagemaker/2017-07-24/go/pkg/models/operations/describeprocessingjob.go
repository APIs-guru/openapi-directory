package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProcessingJobXAmzTargetEnum string

const (
	DescribeProcessingJobXAmzTargetEnumSageMakerDescribeProcessingJob DescribeProcessingJobXAmzTargetEnum = "SageMaker.DescribeProcessingJob"
)

type DescribeProcessingJobHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProcessingJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeProcessingJobRequest struct {
	Headers DescribeProcessingJobHeaders
	Request shared.DescribeProcessingJobRequest `request:"mediaType=application/json"`
}

type DescribeProcessingJobResponse struct {
	ContentType                   string
	DescribeProcessingJobResponse *shared.DescribeProcessingJobResponse
	ResourceNotFound              *interface{}
	StatusCode                    int64
}
