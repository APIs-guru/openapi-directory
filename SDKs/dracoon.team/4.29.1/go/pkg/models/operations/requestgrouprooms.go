package operations

import (
	"openapi/pkg/models/shared"
)

type RequestGroupRoomsPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=group_id"`
}

type RequestGroupRoomsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type RequestGroupRoomsHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestGroupRoomsRequest struct {
	PathParams  RequestGroupRoomsPathParams
	QueryParams RequestGroupRoomsQueryParams
	Headers     RequestGroupRoomsHeaders
}

type RequestGroupRoomsResponse struct {
	ContentType      string
	ErrorResponse    *shared.ErrorResponse
	RoomTreeDataList *shared.RoomTreeDataList
	StatusCode       int64
}
