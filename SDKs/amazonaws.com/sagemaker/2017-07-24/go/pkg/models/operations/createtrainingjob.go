package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTrainingJobXAmzTargetEnum string

const (
	CreateTrainingJobXAmzTargetEnumSageMakerCreateTrainingJob CreateTrainingJobXAmzTargetEnum = "SageMaker.CreateTrainingJob"
)

type CreateTrainingJobHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTrainingJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
