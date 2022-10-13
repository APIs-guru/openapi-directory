package operations

import (
	"openapi/pkg/models/shared"
)

type PatchNotificationsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PatchNotificationsIDRequestBody struct {
	NotifyOnCopy      *bool   `multipartForm:"name=notify_on_copy"`
	NotifyUserActions *bool   `multipartForm:"name=notify_user_actions"`
	Recursive         *bool   `multipartForm:"name=recursive"`
	SendInterval      *string `multipartForm:"name=send_interval"`
}

type PatchNotificationsIDRequest struct {
	PathParams PatchNotificationsIDPathParams
	Request    *PatchNotificationsIDRequestBody `request:"mediaType=multipart/form-data"`
}

type PatchNotificationsIDResponse struct {
	ContentType        string
	NotificationEntity *shared.NotificationEntity
	StatusCode         int64
}
