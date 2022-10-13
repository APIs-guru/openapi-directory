package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAndPreserveRoomRescueKeyPairPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type CreateAndPreserveRoomRescueKeyPairHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type CreateAndPreserveRoomRescueKeyPairRequest struct {
	PathParams CreateAndPreserveRoomRescueKeyPairPathParams
	Headers    CreateAndPreserveRoomRescueKeyPairHeaders
	Request    shared.CreateKeyPairRequest `request:"mediaType=application/json"`
}

type CreateAndPreserveRoomRescueKeyPairResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
