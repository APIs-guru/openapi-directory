package operations

import (
	"openapi/pkg/models/shared"
)

type CreateExperimentXAmzTargetEnum string

const (
	CreateExperimentXAmzTargetEnumSageMakerCreateExperiment CreateExperimentXAmzTargetEnum = "SageMaker.CreateExperiment"
)

type CreateExperimentHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateExperimentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateExperimentRequest struct {
	Headers CreateExperimentHeaders
	Request shared.CreateExperimentRequest `request:"mediaType=application/json"`
}

type CreateExperimentResponse struct {
	ContentType              string
	CreateExperimentResponse *shared.CreateExperimentResponse
	ResourceLimitExceeded    *interface{}
	StatusCode               int64
}
