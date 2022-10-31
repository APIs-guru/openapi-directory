package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEdgePackagingJobXAmzTargetEnum string

const (
	CreateEdgePackagingJobXAmzTargetEnumSageMakerCreateEdgePackagingJob CreateEdgePackagingJobXAmzTargetEnum = "SageMaker.CreateEdgePackagingJob"
)

type CreateEdgePackagingJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEdgePackagingJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
