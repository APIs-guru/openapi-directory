package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMediaAffinityIntentHandlingHeaders struct {
	AcceptLanguage                 string   `header:"style=simple,explode=false,name=Accept-Language"`
	RequestTimeout                 float64  `header:"style=simple,explode=false,name=Request-Timeout"`
	UserAgent                      string   `header:"style=simple,explode=false,name=User-Agent"`
	XApplecloudextensionRetryCount *float64 `header:"style=simple,explode=false,name=x-applecloudextension-retry-count"`
	XApplecloudextensionSessionID  string   `header:"style=simple,explode=false,name=x-applecloudextension-session-id"`
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
