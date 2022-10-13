package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetV3SearchEventsQueryParams struct {
	DateFrom         *time.Time                           `queryParam:"style=form,explode=true,name=date_from"`
	DateTo           *time.Time                           `queryParam:"style=form,explode=true,name=date_to"`
	EditorialSegment *shared.EditorialSegmentContractEnum `queryParam:"style=form,explode=true,name=editorial_segment"`
	Fields           []shared.EventFieldValuesEnum        `queryParam:"style=form,explode=false,name=fields"`
	Page             *int32                               `queryParam:"style=form,explode=true,name=page"`
	PageSize         *int32                               `queryParam:"style=form,explode=true,name=page_size"`
	Phrase           *string                              `queryParam:"style=form,explode=true,name=phrase"`
}

type GetV3SearchEventsHeaders struct {
	AcceptLanguage *string `header:"name=Accept-Language"`
	GiCountryCode  *string `header:"name=GI-Country-Code"`
}

type GetV3SearchEventsRequest struct {
	QueryParams GetV3SearchEventsQueryParams
	Headers     GetV3SearchEventsHeaders
}

type GetV3SearchEventsResponse struct {
	ContentType        string
	EventsSearchResult *shared.EventsSearchResult
	StatusCode         int64
}
