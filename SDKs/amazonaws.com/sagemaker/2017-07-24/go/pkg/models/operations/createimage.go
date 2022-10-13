package operations

import (
	"openapi/pkg/models/shared"
)

type CreateImageXAmzTargetEnum string

const (
	CreateImageXAmzTargetEnumSageMakerCreateImage CreateImageXAmzTargetEnum = "SageMaker.CreateImage"
)

type CreateImageHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateImageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateImageRequest struct {
	Headers CreateImageHeaders
	Request shared.CreateImageRequest `request:"mediaType=application/json"`
}

type CreateImageResponse struct {
	ContentType           string
	CreateImageResponse   *shared.CreateImageResponse
	ResourceInUse         *interface{}
	ResourceLimitExceeded *interface{}
	StatusCode            int64
}
