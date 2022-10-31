package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRoomPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type UpdateRoomHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type UpdateRoomRequest struct {
	PathParams UpdateRoomPathParams
	Headers    UpdateRoomHeaders
	Request    shared.UpdateRoomRequest `request:"mediaType=application/json"`
}

type UpdateRoomResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Node          *shared.Node
	StatusCode    int64
}
