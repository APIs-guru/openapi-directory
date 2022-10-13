package operations

import (
	"openapi/pkg/models/shared"
)

type PlayMediaIntentHandlingHeaders struct {
	AcceptLanguage                 string   `header:"name=Accept-Language"`
	RequestTimeout                 float64  `header:"name=Request-Timeout"`
	UserAgent                      string   `header:"name=User-Agent"`
	XApplecloudextensionRetryCount *float64 `header:"name=x-applecloudextension-retry-count"`
	XApplecloudextensionSessionID  string   `header:"name=x-applecloudextension-session-id"`
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
