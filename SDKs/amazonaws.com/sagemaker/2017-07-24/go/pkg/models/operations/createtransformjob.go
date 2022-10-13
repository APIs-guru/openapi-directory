package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTransformJobXAmzTargetEnum string

const (
	CreateTransformJobXAmzTargetEnumSageMakerCreateTransformJob CreateTransformJobXAmzTargetEnum = "SageMaker.CreateTransformJob"
)

type CreateTransformJobHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTransformJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateTransformJobRequest struct {
	Headers CreateTransformJobHeaders
	Request shared.CreateTransformJobRequest `request:"mediaType=application/json"`
}

type CreateTransformJobResponse struct {
	ContentType                string
	CreateTransformJobResponse *shared.CreateTransformJobResponse
	ResourceInUse              *interface{}
	ResourceLimitExceeded      *interface{}
	ResourceNotFound           *interface{}
	StatusCode                 int64
}
