package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteModelXAmzTargetEnum string

const (
	DeleteModelXAmzTargetEnumSageMakerDeleteModel DeleteModelXAmzTargetEnum = "SageMaker.DeleteModel"
)

type DeleteModelHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteModelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteModelRequest struct {
	Headers DeleteModelHeaders
	Request shared.DeleteModelInput `request:"mediaType=application/json"`
}

type DeleteModelResponse struct {
	ContentType string
	StatusCode  int64
}
