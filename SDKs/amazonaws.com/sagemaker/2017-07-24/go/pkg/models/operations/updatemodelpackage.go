package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateModelPackageXAmzTargetEnum string

const (
	UpdateModelPackageXAmzTargetEnumSageMakerUpdateModelPackage UpdateModelPackageXAmzTargetEnum = "SageMaker.UpdateModelPackage"
)

type UpdateModelPackageHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateModelPackageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateModelPackageRequest struct {
	Headers UpdateModelPackageHeaders
	Request shared.UpdateModelPackageInput `request:"mediaType=application/json"`
}

type UpdateModelPackageResponse struct {
	ContentType              string
	StatusCode               int64
	UpdateModelPackageOutput *shared.UpdateModelPackageOutput
}
