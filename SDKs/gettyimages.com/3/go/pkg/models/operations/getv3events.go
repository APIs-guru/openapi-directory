package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3EventsQueryParams struct {
	Fields []shared.EventDetailFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
	Ids    []int32                             `queryParam:"style=form,explode=false,name=ids"`
}

type GetV3EventsHeaders struct {
	AcceptLanguage *string `header:"name=Accept-Language"`
}

type GetV3EventsRequest struct {
	QueryParams GetV3EventsQueryParams
	Headers     GetV3EventsHeaders
}

type GetV3EventsResponse struct {
	ContentType string
	StatusCode  int64
}
