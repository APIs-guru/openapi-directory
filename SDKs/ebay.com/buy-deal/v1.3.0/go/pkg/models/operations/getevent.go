package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventPathParams struct {
	EventID string `pathParam:"style=simple,explode=false,name=event_id"`
}

type GetEventHeaders struct {
	XEbayCMarketplaceID string `header:"name=X-EBAY-C-MARKETPLACE-ID"`
}

type GetEventSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetEventRequest struct {
	PathParams GetEventPathParams
	Headers    GetEventHeaders
	Security   GetEventSecurity
}

type GetEventResponse struct {
	ContentType string
	Event       *shared.Event
	StatusCode  int64
}
