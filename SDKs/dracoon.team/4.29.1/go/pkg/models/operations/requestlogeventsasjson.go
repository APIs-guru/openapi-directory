package operations

import (
	"openapi/pkg/models/shared"
)

type RequestLogEventsAsJSONQueryParams struct {
	DateEnd    *string      `queryParam:"style=form,explode=true,name=date_end"`
	DateStart  *string      `queryParam:"style=form,explode=true,name=date_start"`
	Limit      *int32       `queryParam:"style=form,explode=true,name=limit"`
	Offset     *int32       `queryParam:"style=form,explode=true,name=offset"`
	Sort       *string      `queryParam:"style=form,explode=true,name=sort"`
	Status     *interface{} `queryParam:"style=form,explode=true,name=status"`
	Type       *int32       `queryParam:"style=form,explode=true,name=type"`
	UserClient *string      `queryParam:"style=form,explode=true,name=user_client"`
	UserID     *int64       `queryParam:"style=form,explode=true,name=user_id"`
}

type RequestLogEventsAsJSONHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestLogEventsAsJSONRequest struct {
	QueryParams RequestLogEventsAsJSONQueryParams
	Headers     RequestLogEventsAsJSONHeaders
}

type RequestLogEventsAsJSONResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	LogEventList  *shared.LogEventList
	StatusCode    int64
}
