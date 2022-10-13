package operations

import (
	"openapi/pkg/models/shared"
)

type GetDealItemsQueryParams struct {
	CategoryIds     *string `queryParam:"style=form,explode=true,name=category_ids"`
	Commissionable  *string `queryParam:"style=form,explode=true,name=commissionable"`
	DeliveryCountry *string `queryParam:"style=form,explode=true,name=delivery_country"`
	Limit           *string `queryParam:"style=form,explode=true,name=limit"`
	Offset          *string `queryParam:"style=form,explode=true,name=offset"`
}

type GetDealItemsHeaders struct {
	XEbayCMarketplaceID string `header:"name=X-EBAY-C-MARKETPLACE-ID"`
}

type GetDealItemsSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetDealItemsRequest struct {
	QueryParams GetDealItemsQueryParams
	Headers     GetDealItemsHeaders
	Security    GetDealItemsSecurity
}

type GetDealItemsResponse struct {
	ContentType            string
	DealItemSearchResponse *shared.DealItemSearchResponse
	StatusCode             int64
}
