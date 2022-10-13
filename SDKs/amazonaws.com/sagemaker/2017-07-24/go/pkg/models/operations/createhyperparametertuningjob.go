package operations

import (
	"openapi/pkg/models/shared"
)

type CreateHyperParameterTuningJobXAmzTargetEnum string

const (
	CreateHyperParameterTuningJobXAmzTargetEnumSageMakerCreateHyperParameterTuningJob CreateHyperParameterTuningJobXAmzTargetEnum = "SageMaker.CreateHyperParameterTuningJob"
)

type CreateHyperParameterTuningJobHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateHyperParameterTuningJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateHyperParameterTuningJobRequest struct {
	Headers CreateHyperParameterTuningJobHeaders
	Request shared.CreateHyperParameterTuningJobRequest `request:"mediaType=application/json"`
}

type CreateHyperParameterTuningJobResponse struct {
	ContentType                           string
	CreateHyperParameterTuningJobResponse *shared.CreateHyperParameterTuningJobResponse
	ResourceInUse                         *interface{}
	ResourceLimitExceeded                 *interface{}
	StatusCode                            int64
}
