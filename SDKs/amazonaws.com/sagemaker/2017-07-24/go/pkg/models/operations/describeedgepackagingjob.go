package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEdgePackagingJobXAmzTargetEnum string

const (
	DescribeEdgePackagingJobXAmzTargetEnumSageMakerDescribeEdgePackagingJob DescribeEdgePackagingJobXAmzTargetEnum = "SageMaker.DescribeEdgePackagingJob"
)

type DescribeEdgePackagingJobHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEdgePackagingJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEdgePackagingJobRequest struct {
	Headers DescribeEdgePackagingJobHeaders
	Request shared.DescribeEdgePackagingJobRequest `request:"mediaType=application/json"`
}

type DescribeEdgePackagingJobResponse struct {
	ContentType                      string
	DescribeEdgePackagingJobResponse *shared.DescribeEdgePackagingJobResponse
	ResourceNotFound                 *interface{}
	StatusCode                       int64
}
