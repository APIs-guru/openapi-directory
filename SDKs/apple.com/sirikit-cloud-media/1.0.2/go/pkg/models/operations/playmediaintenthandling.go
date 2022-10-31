package operations

import (
	"openapi/pkg/models/shared"
)

type PlayMediaIntentHandlingHeaders struct {
	AcceptLanguage                 string   `header:"style=simple,explode=false,name=Accept-Language"`
	RequestTimeout                 float64  `header:"style=simple,explode=false,name=Request-Timeout"`
	UserAgent                      string   `header:"style=simple,explode=false,name=User-Agent"`
	XApplecloudextensionRetryCount *float64 `header:"style=simple,explode=false,name=x-applecloudextension-retry-count"`
	XApplecloudextensionSessionID  string   `header:"style=simple,explode=false,name=x-applecloudextension-session-id"`
}

type PlayMediaIntentHandlingRequest struct {
	Headers PlayMediaIntentHandlingHeaders
	Request []shared.PlayMediaIntentHandlingInvocation `request:"mediaType=application/json"`
}

type PlayMediaIntentHandlingResponse struct {
	ContentType                                string
	Headers                                    map[string][]string
	PlayMediaIntentHandlingInvocationResponses []interface{}
	StatusCode                                 int64
}
