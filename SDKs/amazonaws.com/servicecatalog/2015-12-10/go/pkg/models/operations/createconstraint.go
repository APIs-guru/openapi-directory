package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConstraintXAmzTargetEnum string

const (
	CreateConstraintXAmzTargetEnumAws242ServiceCatalogServiceCreateConstraint CreateConstraintXAmzTargetEnum = "AWS242ServiceCatalogService.CreateConstraint"
)

type CreateConstraintHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateConstraintXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
