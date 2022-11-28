package operations

import (
	"openapi/pkg/models/shared"
)

type RequestRoomRescueKeyPairPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type RequestRoomRescueKeyPairQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type RequestRoomRescueKeyPairHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestRoomRescueKeyPairRequest struct {
	PathParams  RequestRoomRescueKeyPairPathParams
	QueryParams RequestRoomRescueKeyPairQueryParams
	Headers     RequestRoomRescueKeyPairHeaders
}

type RequestRoomRescueKeyPairResponseOutput struct {
	ContentType          string
	ErrorResponse        *shared.ErrorResponse
	StatusCode           int64
	UserKeyPairContainer *shared.UserKeyPairContainerOutput
}
