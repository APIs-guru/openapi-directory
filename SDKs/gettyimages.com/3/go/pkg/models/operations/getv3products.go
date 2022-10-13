package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3ProductsQueryParams struct {
	Fields []shared.ProductFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
}

type GetV3ProductsHeaders struct {
	AcceptLanguage *string `header:"name=Accept-Language"`
}

type GetV3ProductsRequest struct {
	QueryParams GetV3ProductsQueryParams
	Headers     GetV3ProductsHeaders
}

type GetV3ProductsResponse struct {
	ContentType    string
	ProductsResult *shared.ProductsResult
	StatusCode     int64
}
