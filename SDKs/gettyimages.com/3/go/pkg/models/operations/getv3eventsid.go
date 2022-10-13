package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3EventsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetV3EventsIDQueryParams struct {
	Fields []shared.EventDetailFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
}

type GetV3EventsIDHeaders struct {
	AcceptLanguage *string `header:"name=Accept-Language"`
}

type GetV3EventsIDRequest struct {
	PathParams  GetV3EventsIDPathParams
	QueryParams GetV3EventsIDQueryParams
	Headers     GetV3EventsIDHeaders
}

type GetV3EventsIDResponse struct {
	ContentType string
	StatusCode  int64
}
