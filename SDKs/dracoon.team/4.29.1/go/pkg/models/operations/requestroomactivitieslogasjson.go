package operations

import (
	"openapi/pkg/models/shared"
)

type RequestRoomActivitiesLogAsJSONPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type RequestRoomActivitiesLogAsJSONQueryParams struct {
	DateEnd   *string `queryParam:"style=form,explode=true,name=date_end"`
	DateStart *string `queryParam:"style=form,explode=true,name=date_start"`
	Limit     *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort      *string `queryParam:"style=form,explode=true,name=sort"`
	Status    *int32  `queryParam:"style=form,explode=true,name=status"`
	Type      *int32  `queryParam:"style=form,explode=true,name=type"`
	UserID    *int64  `queryParam:"style=form,explode=true,name=user_id"`
}

type RequestRoomActivitiesLogAsJSONHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestRoomActivitiesLogAsJSONRequest struct {
	PathParams  RequestRoomActivitiesLogAsJSONPathParams
	QueryParams RequestRoomActivitiesLogAsJSONQueryParams
	Headers     RequestRoomActivitiesLogAsJSONHeaders
}

type RequestRoomActivitiesLogAsJSONResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	LogEventList  *shared.LogEventList
	StatusCode    int64
}
