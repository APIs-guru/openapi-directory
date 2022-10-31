package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProductXAmzTargetEnum string

const (
	UpdateProductXAmzTargetEnumAws242ServiceCatalogServiceUpdateProduct UpdateProductXAmzTargetEnum = "AWS242ServiceCatalogService.UpdateProduct"
)

type UpdateProductHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateProductXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
