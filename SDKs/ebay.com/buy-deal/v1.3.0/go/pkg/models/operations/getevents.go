package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventsQueryParams struct {
	Limit  *string `queryParam:"style=form,explode=true,name=limit"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type GetEventsHeaders struct {
	XEbayCMarketplaceID string `header:"style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID"`
}

type GetEventsSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetEventsRequest struct {
	QueryParams GetEventsQueryParams
	Headers     GetEventsHeaders
	Security    GetEventsSecurity
}

type GetEventsResponse struct {
	ContentType         string
	EventSearchResponse *shared.EventSearchResponse
	StatusCode          int64
}
