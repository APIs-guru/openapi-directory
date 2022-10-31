package operations

import (
	"openapi/pkg/models/shared"
)

type AddMediaIntentHandlingHeaders struct {
	AcceptLanguage                 string   `header:"style=simple,explode=false,name=Accept-Language"`
	RequestTimeout                 float64  `header:"style=simple,explode=false,name=Request-Timeout"`
	UserAgent                      string   `header:"style=simple,explode=false,name=User-Agent"`
	XApplecloudextensionRetryCount *float64 `header:"style=simple,explode=false,name=x-applecloudextension-retry-count"`
	XApplecloudextensionSessionID  string   `header:"style=simple,explode=false,name=x-applecloudextension-session-id"`
}

type AddMediaIntentHandlingRequest struct {
	Headers AddMediaIntentHandlingHeaders
	Request []shared.AddMediaIntentHandlingInvocation `request:"mediaType=application/json"`
}

type AddMediaIntentHandlingResponse struct {
	AddMediaIntentHandlingInvocationResponses []interface{}
	ContentType                               string
	Headers                                   map[string][]string
	StatusCode                                int64
}
