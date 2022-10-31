package operations

import (
	"openapi/pkg/models/shared"
)

type SetRoomS3TagsPathParams struct {
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type SetRoomS3TagsHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type SetRoomS3TagsRequest struct {
	PathParams SetRoomS3TagsPathParams
	Headers    SetRoomS3TagsHeaders
	Request    shared.S3TagIds `request:"mediaType=application/json"`
}

type SetRoomS3TagsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	S3TagList     *shared.S3TagList
	StatusCode    int64
}
