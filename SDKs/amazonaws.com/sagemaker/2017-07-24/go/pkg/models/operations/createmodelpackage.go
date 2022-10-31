package operations

import (
	"openapi/pkg/models/shared"
)

type CreateModelPackageXAmzTargetEnum string

const (
	CreateModelPackageXAmzTargetEnumSageMakerCreateModelPackage CreateModelPackageXAmzTargetEnum = "SageMaker.CreateModelPackage"
)

type CreateModelPackageHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateModelPackageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateModelPackageRequest struct {
	Headers CreateModelPackageHeaders
	Request shared.CreateModelPackageInput `request:"mediaType=application/json"`
}

type CreateModelPackageResponse struct {
	ConflictException        *interface{}
	ContentType              string
	CreateModelPackageOutput *shared.CreateModelPackageOutput
	ResourceLimitExceeded    *interface{}
	StatusCode               int64
}
