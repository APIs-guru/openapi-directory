package operations

import (
	"openapi/pkg/models/shared"
)

type SearchProductsQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type SearchProductsXAmzTargetEnum string

const (
	SearchProductsXAmzTargetEnumAws242ServiceCatalogServiceSearchProducts SearchProductsXAmzTargetEnum = "AWS242ServiceCatalogService.SearchProducts"
)

type SearchProductsHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SearchProductsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SearchProductsRequest struct {
	QueryParams SearchProductsQueryParams
	Headers     SearchProductsHeaders
	Request     shared.SearchProductsInput `request:"mediaType=application/json"`
}

type SearchProductsResponse struct {
	ContentType                string
	InvalidParametersException *interface{}
	SearchProductsOutput       *shared.SearchProductsOutput
	StatusCode                 int64
}
