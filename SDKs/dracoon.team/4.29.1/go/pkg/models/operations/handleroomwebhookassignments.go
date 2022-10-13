package operations

import (
	"openapi/pkg/models/shared"
)

type HandleRoomWebhookAssignmentsPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type HandleRoomWebhookAssignmentsHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type HandleRoomWebhookAssignmentsRequest struct {
	PathParams HandleRoomWebhookAssignmentsPathParams
	Headers    HandleRoomWebhookAssignmentsHeaders
	Request    shared.UpdateRoomWebhookRequest `request:"mediaType=application/json"`
}

type HandleRoomWebhookAssignmentsResponse struct {
	ContentType     string
	ErrorResponse   *shared.ErrorResponse
	RoomWebhookList *shared.RoomWebhookList
	StatusCode      int64
}
