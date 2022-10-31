package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateActivityOnQueueHeaders struct {
	AcceptLanguage                 string   `header:"style=simple,explode=false,name=Accept-Language"`
	UserAgent                      string   `header:"style=simple,explode=false,name=User-Agent"`
	XApplecloudextensionRetryCount *float64 `header:"style=simple,explode=false,name=x-applecloudextension-retry-count"`
	XApplecloudextensionSessionID  string   `header:"style=simple,explode=false,name=x-applecloudextension-session-id"`
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
