package operations

import (
	"openapi/pkg/models/shared"
)

type StopProcessingJobXAmzTargetEnum string

const (
	StopProcessingJobXAmzTargetEnumSageMakerStopProcessingJob StopProcessingJobXAmzTargetEnum = "SageMaker.StopProcessingJob"
)

type StopProcessingJobHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopProcessingJobXAmzTargetEnum `header:"name=X-Amz-Target"`
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
