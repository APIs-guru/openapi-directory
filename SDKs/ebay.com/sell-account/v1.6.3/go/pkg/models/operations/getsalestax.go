package operations

import (
	"openapi/pkg/models/shared"
)

type GetSalesTaxPathParams struct {
	CountryCode    string `pathParam:"style=simple,explode=false,name=countryCode"`
	JurisdictionID string `pathParam:"style=simple,explode=false,name=jurisdictionId"`
}

type GetSalesTaxSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetSalesTaxRequest struct {
	PathParams GetSalesTaxPathParams
	Security   GetSalesTaxSecurity
}

type GetSalesTaxResponse struct {
	ContentType string
	SalesTax    *shared.SalesTax
	StatusCode  int64
}
