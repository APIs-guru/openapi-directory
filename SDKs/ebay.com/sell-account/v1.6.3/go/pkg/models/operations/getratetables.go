package operations

import (
	"openapi/pkg/models/shared"
)

type GetRateTablesQueryParams struct {
	CountryCode *string `queryParam:"style=form,explode=true,name=country_code"`
}

type GetRateTablesSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetRateTablesRequest struct {
	QueryParams GetRateTablesQueryParams
	Security    GetRateTablesSecurity
}

type GetRateTablesResponse struct {
	ContentType       string
	RateTableResponse *shared.RateTableResponse
	StatusCode        int64
}
