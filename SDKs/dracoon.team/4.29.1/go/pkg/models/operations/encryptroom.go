package operations

import (
	"openapi/pkg/models/shared"
)

type EncryptRoomPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type EncryptRoomHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type EncryptRoomRequest struct {
	PathParams EncryptRoomPathParams
	Headers    EncryptRoomHeaders
	Request    shared.EncryptRoomRequest `request:"mediaType=application/json"`
}

type EncryptRoomResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Node          *shared.Node
	StatusCode    int64
}
