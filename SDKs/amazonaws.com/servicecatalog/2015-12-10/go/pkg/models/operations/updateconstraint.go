package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConstraintXAmzTargetEnum string

const (
	UpdateConstraintXAmzTargetEnumAws242ServiceCatalogServiceUpdateConstraint UpdateConstraintXAmzTargetEnum = "AWS242ServiceCatalogService.UpdateConstraint"
)

type UpdateConstraintHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateConstraintXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateConstraintRequest struct {
	Headers UpdateConstraintHeaders
	Request shared.UpdateConstraintInput `request:"mediaType=application/json"`
}

type UpdateConstraintResponse struct {
	ContentType                string
	InvalidParametersException *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	UpdateConstraintOutput     *shared.UpdateConstraintOutput
}
