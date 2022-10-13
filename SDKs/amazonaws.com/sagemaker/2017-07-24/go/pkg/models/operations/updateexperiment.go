package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateExperimentXAmzTargetEnum string

const (
	UpdateExperimentXAmzTargetEnumSageMakerUpdateExperiment UpdateExperimentXAmzTargetEnum = "SageMaker.UpdateExperiment"
)

type UpdateExperimentHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateExperimentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateExperimentRequest struct {
	Headers UpdateExperimentHeaders
	Request shared.UpdateExperimentRequest `request:"mediaType=application/json"`
}

type UpdateExperimentResponse struct {
	ConflictException        *interface{}
	ContentType              string
	ResourceNotFound         *interface{}
	StatusCode               int64
	UpdateExperimentResponse *shared.UpdateExperimentResponse
}
