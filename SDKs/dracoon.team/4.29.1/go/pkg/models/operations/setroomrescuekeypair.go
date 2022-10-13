package operations

import (
	"openapi/pkg/models/shared"
)

type SetRoomRescueKeyPairPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type SetRoomRescueKeyPairHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type SetRoomRescueKeyPairRequest struct {
	PathParams SetRoomRescueKeyPairPathParams
	Headers    SetRoomRescueKeyPairHeaders
	Request    shared.UserKeyPairContainer `request:"mediaType=application/json"`
}

type SetRoomRescueKeyPairResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
