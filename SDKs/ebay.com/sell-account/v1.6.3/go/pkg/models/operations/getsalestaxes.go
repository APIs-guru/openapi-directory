package operations

import (
	"openapi/pkg/models/shared"
)

type GetSalesTaxesQueryParams struct {
	CountryCode string `queryParam:"style=form,explode=true,name=country_code"`
}

type GetSalesTaxesSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetSalesTaxesRequest struct {
	QueryParams GetSalesTaxesQueryParams
	Security    GetSalesTaxesSecurity
}

type GetSalesTaxesResponse struct {
	ContentType string
	SalesTaxes  *shared.SalesTaxes
	StatusCode  int64
}
