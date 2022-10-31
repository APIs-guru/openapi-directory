package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTrainingJobXAmzTargetEnum string

const (
	UpdateTrainingJobXAmzTargetEnumSageMakerUpdateTrainingJob UpdateTrainingJobXAmzTargetEnum = "SageMaker.UpdateTrainingJob"
)

type UpdateTrainingJobHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTrainingJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
