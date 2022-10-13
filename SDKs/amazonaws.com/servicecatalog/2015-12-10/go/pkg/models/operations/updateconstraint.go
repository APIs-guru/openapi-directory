package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConstraintXAmzTargetEnum string

const (
	UpdateConstraintXAmzTargetEnumAws242ServiceCatalogServiceUpdateConstraint UpdateConstraintXAmzTargetEnum = "AWS242ServiceCatalogService.UpdateConstraint"
)

type UpdateConstraintHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateConstraintXAmzTargetEnum `header:"name=X-Amz-Target"`
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
