package operations

import (
	"openapi/pkg/models/shared"
)

type RequestRoomUsersPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type RequestRoomUsersQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestRoomUsersHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RequestRoomUsersRequest struct {
	PathParams  RequestRoomUsersPathParams
	QueryParams RequestRoomUsersQueryParams
	Headers     RequestRoomUsersHeaders
}

type RequestRoomUsersResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	RoomUserList  *shared.RoomUserList
	StatusCode    int64
}
