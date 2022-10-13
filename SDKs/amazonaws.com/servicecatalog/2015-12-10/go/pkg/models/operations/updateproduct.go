package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProductXAmzTargetEnum string

const (
	UpdateProductXAmzTargetEnumAws242ServiceCatalogServiceUpdateProduct UpdateProductXAmzTargetEnum = "AWS242ServiceCatalogService.UpdateProduct"
)

type UpdateProductHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateProductXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateProductRequest struct {
	Headers UpdateProductHeaders
	Request shared.UpdateProductInput `request:"mediaType=application/json"`
}

type UpdateProductResponse struct {
	ContentType                   string
	InvalidParametersException    *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	TagOptionNotMigratedException *interface{}
	UpdateProductOutput           *shared.UpdateProductOutput
}
