package operations

import (
	"openapi/pkg/models/shared"
)

type StopProcessingJobXAmzTargetEnum string

const (
	StopProcessingJobXAmzTargetEnumSageMakerStopProcessingJob StopProcessingJobXAmzTargetEnum = "SageMaker.StopProcessingJob"
)

type StopProcessingJobHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopProcessingJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopProcessingJobRequest struct {
	Headers StopProcessingJobHeaders
	Request shared.StopProcessingJobRequest `request:"mediaType=application/json"`
}

type StopProcessingJobResponse struct {
	ContentType      string
	ResourceNotFound *interface{}
	StatusCode       int64
}
