package operations

import (
	"openapi/pkg/models/shared"
)

type StopLabelingJobXAmzTargetEnum string

const (
	StopLabelingJobXAmzTargetEnumSageMakerStopLabelingJob StopLabelingJobXAmzTargetEnum = "SageMaker.StopLabelingJob"
)

type StopLabelingJobHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopLabelingJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopLabelingJobRequest struct {
	Headers StopLabelingJobHeaders
	Request shared.StopLabelingJobRequest `request:"mediaType=application/json"`
}

type StopLabelingJobResponse struct {
	ContentType      string
	ResourceNotFound *interface{}
	StatusCode       int64
}
