package operations

import (
	"openapi/pkg/models/shared"
)

type RequestListOfWebhooksForRoomPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type RequestListOfWebhooksForRoomQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type RequestListOfWebhooksForRoomHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestListOfWebhooksForRoomRequest struct {
	PathParams  RequestListOfWebhooksForRoomPathParams
	QueryParams RequestListOfWebhooksForRoomQueryParams
	Headers     RequestListOfWebhooksForRoomHeaders
}

type RequestListOfWebhooksForRoomResponse struct {
	ContentType     string
	ErrorResponse   *shared.ErrorResponse
	RoomWebhookList *shared.RoomWebhookList
	StatusCode      int64
}
