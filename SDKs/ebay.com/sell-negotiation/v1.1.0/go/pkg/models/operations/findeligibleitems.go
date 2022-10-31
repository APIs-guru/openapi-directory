package operations

import (
	"openapi/pkg/models/shared"
)

type FindEligibleItemsQueryParams struct {
	Limit  *string `queryParam:"style=form,explode=true,name=limit"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type FindEligibleItemsHeaders struct {
	XEbayCMarketplaceID string `header:"style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID"`
}

type FindEligibleItemsSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type FindEligibleItemsRequest struct {
	QueryParams FindEligibleItemsQueryParams
	Headers     FindEligibleItemsHeaders
	Security    FindEligibleItemsSecurity
}

type FindEligibleItemsResponse struct {
	ContentType                 string
	PagedEligibleItemCollection *shared.PagedEligibleItemCollection
	StatusCode                  int64
}
