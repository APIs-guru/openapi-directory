package operations

import (
	"openapi/pkg/models/shared"
)

type RequestUsersRoomsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type RequestUsersRoomsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type RequestUsersRoomsHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestUsersRoomsRequest struct {
	PathParams  RequestUsersRoomsPathParams
	QueryParams RequestUsersRoomsQueryParams
	Headers     RequestUsersRoomsHeaders
}

type RequestUsersRoomsResponse struct {
	ContentType      string
	ErrorResponse    *shared.ErrorResponse
	RoomTreeDataList *shared.RoomTreeDataList
	StatusCode       int64
}
