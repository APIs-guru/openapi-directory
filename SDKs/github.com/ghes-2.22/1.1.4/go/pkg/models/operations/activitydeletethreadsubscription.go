package operations

import (
"openapi/pkg/models/shared")

type ActivityDeleteThreadSubscriptionPathParams struct {
    ThreadID int64 `pathParam:"style=simple,explode=false,name=thread_id"`
    
}

type ActivityDeleteThreadSubscriptionRequest struct {
    PathParams ActivityDeleteThreadSubscriptionPathParams 
    
}

type ActivityDeleteThreadSubscriptionResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

