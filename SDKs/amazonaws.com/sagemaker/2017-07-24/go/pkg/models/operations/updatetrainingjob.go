package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTrainingJobXAmzTargetEnum string

const (
	UpdateTrainingJobXAmzTargetEnumSageMakerUpdateTrainingJob UpdateTrainingJobXAmzTargetEnum = "SageMaker.UpdateTrainingJob"
)

type UpdateTrainingJobHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTrainingJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateTrainingJobRequest struct {
	Headers UpdateTrainingJobHeaders
	Request shared.UpdateTrainingJobRequest `request:"mediaType=application/json"`
}

type UpdateTrainingJobResponse struct {
	ContentType               string
	ResourceNotFound          *interface{}
	StatusCode                int64
	UpdateTrainingJobResponse *shared.UpdateTrainingJobResponse
}
