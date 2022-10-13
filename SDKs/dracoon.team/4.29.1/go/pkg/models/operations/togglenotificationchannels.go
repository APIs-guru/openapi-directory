package operations

import (
	"openapi/pkg/models/shared"
)

type ToggleNotificationChannelsHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type ToggleNotificationChannelsRequest struct {
	Headers ToggleNotificationChannelsHeaders
	Request shared.NotificationChannelActivationRequest `request:"mediaType=application/json"`
}

type ToggleNotificationChannelsResponse struct {
	ContentType             string
	ErrorResponse           *shared.ErrorResponse
	NotificationChannelList *shared.NotificationChannelList
	StatusCode              int64
}
