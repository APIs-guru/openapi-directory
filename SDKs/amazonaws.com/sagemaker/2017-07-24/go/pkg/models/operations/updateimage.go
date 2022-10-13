package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateImageXAmzTargetEnum string

const (
	UpdateImageXAmzTargetEnumSageMakerUpdateImage UpdateImageXAmzTargetEnum = "SageMaker.UpdateImage"
)

type UpdateImageHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateImageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateImageRequest struct {
	Headers UpdateImageHeaders
	Request shared.UpdateImageRequest `request:"mediaType=application/json"`
}

type UpdateImageResponse struct {
	ContentType         string
	ResourceInUse       *interface{}
	ResourceNotFound    *interface{}
	StatusCode          int64
	UpdateImageResponse *shared.UpdateImageResponse
}
