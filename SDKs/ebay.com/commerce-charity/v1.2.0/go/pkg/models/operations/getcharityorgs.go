package operations

import (
	"openapi/pkg/models/shared"
)

type GetCharityOrgsQueryParams struct {
	Limit           *string `queryParam:"style=form,explode=true,name=limit"`
	Offset          *string `queryParam:"style=form,explode=true,name=offset"`
	Q               *string `queryParam:"style=form,explode=true,name=q"`
	RegistrationIds *string `queryParam:"style=form,explode=true,name=registration_ids"`
}

type GetCharityOrgsHeaders struct {
	XEbayCMarketplaceID string `header:"style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID"`
}

type GetCharityOrgsSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetCharityOrgsRequest struct {
	QueryParams GetCharityOrgsQueryParams
	Headers     GetCharityOrgsHeaders
	Security    GetCharityOrgsSecurity
}

type GetCharityOrgsResponse struct {
	CharitySearchResponse *shared.CharitySearchResponse
	ContentType           string
	StatusCode            int64
}
