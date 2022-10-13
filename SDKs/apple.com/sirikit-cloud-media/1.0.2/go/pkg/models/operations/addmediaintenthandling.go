package operations

import (
	"openapi/pkg/models/shared"
)

type AddMediaIntentHandlingHeaders struct {
	AcceptLanguage                 string   `header:"name=Accept-Language"`
	RequestTimeout                 float64  `header:"name=Request-Timeout"`
	UserAgent                      string   `header:"name=User-Agent"`
	XApplecloudextensionRetryCount *float64 `header:"name=x-applecloudextension-retry-count"`
	XApplecloudextensionSessionID  string   `header:"name=x-applecloudextension-session-id"`
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
