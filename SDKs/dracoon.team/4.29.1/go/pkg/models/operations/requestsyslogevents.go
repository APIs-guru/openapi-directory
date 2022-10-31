package operations

import (
	"openapi/pkg/models/shared"
)

type RequestSyslogEventsQueryParams struct {
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

type RequestSyslogEventsHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestSyslogEventsRequest struct {
	QueryParams RequestSyslogEventsQueryParams
	Headers     RequestSyslogEventsHeaders
}

type RequestSyslogEventsResponse struct {
	ContentType     string
	ErrorResponse   *shared.ErrorResponse
	StatusCode      int64
	SyslogEventList *shared.SyslogEventList
}
