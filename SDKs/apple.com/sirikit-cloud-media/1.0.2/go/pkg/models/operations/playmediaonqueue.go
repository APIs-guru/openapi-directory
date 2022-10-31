package operations

import (
"openapi/pkg/models/shared")

type PlayMediaOnQueueHeaders struct {
    AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
    UserAgent string `header:"style=simple,explode=false,name=User-Agent"`
    XApplecloudextensionRetryCount *float64 `header:"style=simple,explode=false,name=x-applecloudextension-retry-count"`
    XApplecloudextensionSessionID string `header:"style=simple,explode=false,name=x-applecloudextension-session-id"`
    
}

type PlayMediaOnQueueRequest struct {
    Headers PlayMediaOnQueueHeaders 
    Request *shared.PlayMediaRequest `request:"mediaType=application/json"`
    
}

type PlayMediaOnQueueResponse struct {
    ContentType string 
    Queue *shared.Queue 
    StatusCode int64 
    
}

