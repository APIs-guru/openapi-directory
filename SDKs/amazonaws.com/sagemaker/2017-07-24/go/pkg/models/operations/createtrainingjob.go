package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTrainingJobXAmzTargetEnum string

const (
	CreateTrainingJobXAmzTargetEnumSageMakerCreateTrainingJob CreateTrainingJobXAmzTargetEnum = "SageMaker.CreateTrainingJob"
)

type CreateTrainingJobHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTrainingJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateTrainingJobRequest struct {
	Headers CreateTrainingJobHeaders
	Request shared.CreateTrainingJobRequest `request:"mediaType=application/json"`
}

type CreateTrainingJobResponse struct {
	ContentType               string
	CreateTrainingJobResponse *shared.CreateTrainingJobResponse
	ResourceInUse             *interface{}
	ResourceLimitExceeded     *interface{}
	ResourceNotFound          *interface{}
	StatusCode                int64
}
