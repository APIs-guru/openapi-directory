package operations

import (
	"openapi/pkg/models/shared"
)

type RequestNotificationChannelsInfoHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestNotificationChannelsInfoRequest struct {
	Headers RequestNotificationChannelsInfoHeaders
}

type RequestNotificationChannelsInfoResponse struct {
	ContentType             string
	ErrorResponse           *shared.ErrorResponse
	NotificationChannelList *shared.NotificationChannelList
	StatusCode              int64
}
