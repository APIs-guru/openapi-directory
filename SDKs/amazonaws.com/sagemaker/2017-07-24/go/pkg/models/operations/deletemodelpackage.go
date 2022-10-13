package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteModelPackageXAmzTargetEnum string

const (
	DeleteModelPackageXAmzTargetEnumSageMakerDeleteModelPackage DeleteModelPackageXAmzTargetEnum = "SageMaker.DeleteModelPackage"
)

type DeleteModelPackageHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteModelPackageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteModelPackageRequest struct {
	Headers DeleteModelPackageHeaders
	Request shared.DeleteModelPackageInput `request:"mediaType=application/json"`
}

type DeleteModelPackageResponse struct {
	ConflictException *interface{}
	ContentType       string
	StatusCode        int64
}
