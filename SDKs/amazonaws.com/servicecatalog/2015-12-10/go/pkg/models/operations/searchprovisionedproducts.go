package operations

import (
	"openapi/pkg/models/shared"
)

type SearchProvisionedProductsQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type SearchProvisionedProductsXAmzTargetEnum string

const (
	SearchProvisionedProductsXAmzTargetEnumAws242ServiceCatalogServiceSearchProvisionedProducts SearchProvisionedProductsXAmzTargetEnum = "AWS242ServiceCatalogService.SearchProvisionedProducts"
)

type SearchProvisionedProductsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SearchProvisionedProductsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type SearchProvisionedProductsRequest struct {
	QueryParams SearchProvisionedProductsQueryParams
	Headers     SearchProvisionedProductsHeaders
	Request     shared.SearchProvisionedProductsInput `request:"mediaType=application/json"`
}

type SearchProvisionedProductsResponse struct {
	ContentType                     string
	InvalidParametersException      *interface{}
	SearchProvisionedProductsOutput *shared.SearchProvisionedProductsOutput
	StatusCode                      int64
}
