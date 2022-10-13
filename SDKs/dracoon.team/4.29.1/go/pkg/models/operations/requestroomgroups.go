package operations

import (
	"openapi/pkg/models/shared"
)

type RequestRoomGroupsPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type RequestRoomGroupsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestRoomGroupsHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestRoomGroupsRequest struct {
	PathParams  RequestRoomGroupsPathParams
	QueryParams RequestRoomGroupsQueryParams
	Headers     RequestRoomGroupsHeaders
}

type RequestRoomGroupsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	RoomGroupList *shared.RoomGroupList
	StatusCode    int64
}
