package operations

type ExtensionConfigurationHeaders struct {
	AcceptLanguage                 string   `header:"name=Accept-Language"`
	CacheControl                   string   `header:"name=Cache-Control"`
	IfNoneMatch                    *string  `header:"name=If-None-Match"`
	RequestTimeout                 float64  `header:"name=Request-Timeout"`
	UserAgent                      string   `header:"name=User-Agent"`
	XApplecloudextensionRetryCount *float64 `header:"name=x-applecloudextension-retry-count"`
	XApplecloudextensionSessionID  string   `header:"name=x-applecloudextension-session-id"`
}

type ExtensionConfigurationRequest struct {
	Headers ExtensionConfigurationHeaders
}

type ExtensionConfigurationResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
