package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateExperimentXAmzTargetEnum string

const (
	UpdateExperimentXAmzTargetEnumSageMakerUpdateExperiment UpdateExperimentXAmzTargetEnum = "SageMaker.UpdateExperiment"
)

type UpdateExperimentHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateExperimentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
