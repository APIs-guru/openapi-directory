package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteExperimentXAmzTargetEnum string

const (
	DeleteExperimentXAmzTargetEnumSageMakerDeleteExperiment DeleteExperimentXAmzTargetEnum = "SageMaker.DeleteExperiment"
)

type DeleteExperimentHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteExperimentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteExperimentRequest struct {
	Headers DeleteExperimentHeaders
	Request shared.DeleteExperimentRequest `request:"mediaType=application/json"`
}

type DeleteExperimentResponse struct {
	ContentType              string
	DeleteExperimentResponse *shared.DeleteExperimentResponse
	ResourceNotFound         *interface{}
	StatusCode               int64
}
