package operations

import (
	"openapi/pkg/models/shared"
)

type RequestRoomS3TagsPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type RequestRoomS3TagsHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestRoomS3TagsRequest struct {
	PathParams RequestRoomS3TagsPathParams
	Headers    RequestRoomS3TagsHeaders
}

type RequestRoomS3TagsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	S3TagList     *shared.S3TagList
	StatusCode    int64
}
