package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMediaAffinityIntentHandlingHeaders struct {
	AcceptLanguage                 string   `header:"name=Accept-Language"`
	RequestTimeout                 float64  `header:"name=Request-Timeout"`
	UserAgent                      string   `header:"name=User-Agent"`
	XApplecloudextensionRetryCount *float64 `header:"name=x-applecloudextension-retry-count"`
	XApplecloudextensionSessionID  string   `header:"name=x-applecloudextension-session-id"`
}

type UpdateMediaAffinityIntentHandlingRequest struct {
	Headers UpdateMediaAffinityIntentHandlingHeaders
	Request []shared.UpdateMediaAffinityIntentHandlingInvocation `request:"mediaType=application/json"`
}

type UpdateMediaAffinityIntentHandlingResponse struct {
	ContentType                                          string
	Headers                                              map[string][]string
	StatusCode                                           int64
	UpdateMediaAffinityIntentHandlingInvocationResponses []interface{}
}
