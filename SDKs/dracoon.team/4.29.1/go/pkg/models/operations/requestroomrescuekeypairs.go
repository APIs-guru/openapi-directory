package operations

import (
	"openapi/pkg/models/shared"
)

type RequestRoomRescueKeyPairsPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type RequestRoomRescueKeyPairsHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestRoomRescueKeyPairsRequest struct {
	PathParams RequestRoomRescueKeyPairsPathParams
	Headers    RequestRoomRescueKeyPairsHeaders
}

type RequestRoomRescueKeyPairsResponse struct {
	ContentType           string
	ErrorResponse         *shared.ErrorResponse
	StatusCode            int64
	UserKeyPairContainers []shared.UserKeyPairContainer
}
