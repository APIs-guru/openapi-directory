package operations

import (
	"openapi/pkg/models/shared"
)

type PlayMediaOnQueueHeaders struct {
	AcceptLanguage                 string   `header:"name=Accept-Language"`
	UserAgent                      string   `header:"name=User-Agent"`
	XApplecloudextensionRetryCount *float64 `header:"name=x-applecloudextension-retry-count"`
	XApplecloudextensionSessionID  string   `header:"name=x-applecloudextension-session-id"`
}

type PlayMediaOnQueueRequest struct {
	Headers PlayMediaOnQueueHeaders
	Request *shared.PlayMediaRequest `request:"mediaType=application/json"`
}

type PlayMediaOnQueueResponse struct {
	ContentType string
	Queue       *shared.Queue
	StatusCode  int64
}
