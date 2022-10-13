package operations

import (
	"openapi/pkg/models/shared"
)

type RevokeRoomGroupsPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type RevokeRoomGroupsHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RevokeRoomGroupsRequest struct {
	PathParams RevokeRoomGroupsPathParams
	Headers    RevokeRoomGroupsHeaders
	Request    shared.RoomGroupsDeleteBatchRequest `request:"mediaType=application/json"`
}

type RevokeRoomGroupsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
