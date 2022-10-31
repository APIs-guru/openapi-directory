package operations

import (
	"openapi/pkg/models/shared"
)

type RequestLastAdminRoomsUsersPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type RequestLastAdminRoomsUsersHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RequestLastAdminRoomsUsersRequest struct {
	PathParams RequestLastAdminRoomsUsersPathParams
	Headers    RequestLastAdminRoomsUsersHeaders
}

type RequestLastAdminRoomsUsersResponse struct {
	ContentType           string
	ErrorResponse         *shared.ErrorResponse
	LastAdminUserRoomList *shared.LastAdminUserRoomList
	StatusCode            int64
}
