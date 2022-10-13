package operations

import (
	"openapi/pkg/models/shared"
)

type StopHyperParameterTuningJobXAmzTargetEnum string

const (
	StopHyperParameterTuningJobXAmzTargetEnumSageMakerStopHyperParameterTuningJob StopHyperParameterTuningJobXAmzTargetEnum = "SageMaker.StopHyperParameterTuningJob"
)

type StopHyperParameterTuningJobHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopHyperParameterTuningJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopHyperParameterTuningJobRequest struct {
	Headers StopHyperParameterTuningJobHeaders
	Request shared.StopHyperParameterTuningJobRequest `request:"mediaType=application/json"`
}

type StopHyperParameterTuningJobResponse struct {
	ContentType      string
	ResourceNotFound *interface{}
	StatusCode       int64
}
