package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateActivityOnQueueHeaders struct {
	AcceptLanguage                 string   `header:"name=Accept-Language"`
	UserAgent                      string   `header:"name=User-Agent"`
	XApplecloudextensionRetryCount *float64 `header:"name=x-applecloudextension-retry-count"`
	XApplecloudextensionSessionID  string   `header:"name=x-applecloudextension-session-id"`
}

type UpdateActivityOnQueueRequest struct {
	Headers UpdateActivityOnQueueHeaders
	Request *shared.UpdateActivityRequest `request:"mediaType=application/json"`
}

type UpdateActivityOnQueueResponse struct {
	ContentType            string
	StatusCode             int64
	UpdateActivityResponse *shared.UpdateActivityResponse
}
