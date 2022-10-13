package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConstraintXAmzTargetEnum string

const (
	CreateConstraintXAmzTargetEnumAws242ServiceCatalogServiceCreateConstraint CreateConstraintXAmzTargetEnum = "AWS242ServiceCatalogService.CreateConstraint"
)

type CreateConstraintHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateConstraintXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateConstraintRequest struct {
	Headers CreateConstraintHeaders
	Request shared.CreateConstraintInput `request:"mediaType=application/json"`
}

type CreateConstraintResponse struct {
	ContentType                string
	CreateConstraintOutput     *shared.CreateConstraintOutput
	DuplicateResourceException *interface{}
	InvalidParametersException *interface{}
	LimitExceededException     *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
