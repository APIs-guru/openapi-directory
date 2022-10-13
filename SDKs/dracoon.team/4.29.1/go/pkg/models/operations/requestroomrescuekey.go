package operations

import (
	"openapi/pkg/models/shared"
)

type RequestRoomRescueKeyPathParams struct {
	FileID int64 `pathParam:"style=simple,explode=false,name=file_id"`
}

type RequestRoomRescueKeyQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type RequestRoomRescueKeyHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestRoomRescueKeyRequest struct {
	PathParams  RequestRoomRescueKeyPathParams
	QueryParams RequestRoomRescueKeyQueryParams
	Headers     RequestRoomRescueKeyHeaders
}

type RequestRoomRescueKeyResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	FileKey       *shared.FileKey
	StatusCode    int64
}
