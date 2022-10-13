package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteConstraintXAmzTargetEnum string

const (
	DeleteConstraintXAmzTargetEnumAws242ServiceCatalogServiceDeleteConstraint DeleteConstraintXAmzTargetEnum = "AWS242ServiceCatalogService.DeleteConstraint"
)

type DeleteConstraintHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteConstraintXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteConstraintRequest struct {
	Headers DeleteConstraintHeaders
	Request shared.DeleteConstraintInput `request:"mediaType=application/json"`
}

type DeleteConstraintResponse struct {
	ContentType                string
	DeleteConstraintOutput     map[string]interface{}
	InvalidParametersException *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
