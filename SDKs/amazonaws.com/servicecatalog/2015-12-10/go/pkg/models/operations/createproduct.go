package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProductXAmzTargetEnum string

const (
	CreateProductXAmzTargetEnumAws242ServiceCatalogServiceCreateProduct CreateProductXAmzTargetEnum = "AWS242ServiceCatalogService.CreateProduct"
)

type CreateProductHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateProductXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateProductRequest struct {
	Headers CreateProductHeaders
	Request shared.CreateProductInput `request:"mediaType=application/json"`
}

type CreateProductResponse struct {
	ContentType                   string
	CreateProductOutput           *shared.CreateProductOutput
	InvalidParametersException    *interface{}
	LimitExceededException        *interface{}
	StatusCode                    int64
	TagOptionNotMigratedException *interface{}
}
