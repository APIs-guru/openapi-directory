package operations

import (
	"openapi/pkg/models/shared"
)

type RequestListOfNotificationConfigsHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RequestListOfNotificationConfigsRequest struct {
	Headers RequestListOfNotificationConfigsHeaders
}

type RequestListOfNotificationConfigsResponse struct {
	ContentType            string
	ErrorResponse          *shared.ErrorResponse
	NotificationConfigList *shared.NotificationConfigList
	StatusCode             int64
}
