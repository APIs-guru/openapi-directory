package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEdgePackagingJobXAmzTargetEnum string

const (
	CreateEdgePackagingJobXAmzTargetEnumSageMakerCreateEdgePackagingJob CreateEdgePackagingJobXAmzTargetEnum = "SageMaker.CreateEdgePackagingJob"
)

type CreateEdgePackagingJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEdgePackagingJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateEdgePackagingJobRequest struct {
	Headers CreateEdgePackagingJobHeaders
	Request shared.CreateEdgePackagingJobRequest `request:"mediaType=application/json"`
}

type CreateEdgePackagingJobResponse struct {
	ContentType           string
	ResourceLimitExceeded *interface{}
	StatusCode            int64
}
