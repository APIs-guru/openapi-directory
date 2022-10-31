package operations



type ExtensionConfigurationHeaders struct {
    AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
    CacheControl string `header:"style=simple,explode=false,name=Cache-Control"`
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    RequestTimeout float64 `header:"style=simple,explode=false,name=Request-Timeout"`
    UserAgent string `header:"style=simple,explode=false,name=User-Agent"`
    XApplecloudextensionRetryCount *float64 `header:"style=simple,explode=false,name=x-applecloudextension-retry-count"`
    XApplecloudextensionSessionID string `header:"style=simple,explode=false,name=x-applecloudextension-session-id"`
    
}

type ExtensionConfigurationRequest struct {
    Headers ExtensionConfigurationHeaders 
    
}

type ExtensionConfigurationResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

