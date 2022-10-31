package operations

import (
"openapi/pkg/models/shared")

type GetTaskPathParams struct {
    TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
    
}

type GetTaskSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetTaskRequest struct {
    PathParams GetTaskPathParams 
    Security GetTaskSecurity 
    
}

type GetTaskResponse struct {
    ContentType string 
    StatusCode int64 
    Task *shared.Task 
    
}

