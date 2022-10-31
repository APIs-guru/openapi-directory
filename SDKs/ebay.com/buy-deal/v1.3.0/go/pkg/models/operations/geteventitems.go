package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventItemsQueryParams struct {
	CategoryIds     *string `queryParam:"style=form,explode=true,name=category_ids"`
	DeliveryCountry *string `queryParam:"style=form,explode=true,name=delivery_country"`
	EventIds        string  `queryParam:"style=form,explode=true,name=event_ids"`
	Limit           *string `queryParam:"style=form,explode=true,name=limit"`
	Offset          *string `queryParam:"style=form,explode=true,name=offset"`
}

type GetEventItemsHeaders struct {
	XEbayCMarketplaceID string `header:"style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID"`
}

type GetEventItemsSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetEventItemsRequest struct {
	QueryParams GetEventItemsQueryParams
	Headers     GetEventItemsHeaders
	Security    GetEventItemsSecurity
}

type GetEventItemsResponse struct {
	ContentType             string
	EventItemSearchResponse *shared.EventItemSearchResponse
	StatusCode              int64
}
