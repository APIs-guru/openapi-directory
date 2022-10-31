package operations

import (
	"openapi/pkg/models/shared"
)

type GetNotificationsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetNotificationsIDRequest struct {
	PathParams GetNotificationsIDPathParams
}

type GetNotificationsIDResponse struct {
	ContentType        string
	NotificationEntity *shared.NotificationEntity
	StatusCode         int64
}
