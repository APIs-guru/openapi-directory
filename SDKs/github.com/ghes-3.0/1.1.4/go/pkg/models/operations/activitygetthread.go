package operations

import (
"openapi/pkg/models/shared")

type ActivityGetThreadPathParams struct {
    ThreadID int64 `pathParam:"style=simple,explode=false,name=thread_id"`
    
}

type ActivityGetThreadRequest struct {
    PathParams ActivityGetThreadPathParams 
    
}

type ActivityGetThreadResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Thread *shared.Thread 
    
}

