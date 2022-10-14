package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ActivityMarkNotificationsAsReadRequestBody struct {
	LastReadAt *time.Time `json:"last_read_at,omitempty"`
	Read       *bool      `json:"read,omitempty"`
}

type ActivityMarkNotificationsAsReadRequest struct {
	Request *ActivityMarkNotificationsAsReadRequestBody `request:"mediaType=application/json"`
}

type ActivityMarkNotificationsAsRead202ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type ActivityMarkNotificationsAsReadResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	ActivityMarkNotificationsAsRead202ApplicationJSONObject *ActivityMarkNotificationsAsRead202ApplicationJSON
	BasicError                                              *shared.BasicError
}
