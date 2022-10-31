package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProcessingJobXAmzTargetEnum string

const (
	CreateProcessingJobXAmzTargetEnumSageMakerCreateProcessingJob CreateProcessingJobXAmzTargetEnum = "SageMaker.CreateProcessingJob"
)

type CreateProcessingJobHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateProcessingJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateProcessingJobRequest struct {
	Headers CreateProcessingJobHeaders
	Request shared.CreateProcessingJobRequest `request:"mediaType=application/json"`
}

type CreateProcessingJobResponse struct {
	ContentType                 string
	CreateProcessingJobResponse *shared.CreateProcessingJobResponse
	ResourceInUse               *interface{}
	ResourceLimitExceeded       *interface{}
	ResourceNotFound            *interface{}
	StatusCode                  int64
}
