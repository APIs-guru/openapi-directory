package operations

import (
"openapi/pkg/models/shared")

type GetInputFilePathParams struct {
    TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
    
}

type GetInputFileSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetInputFileRequest struct {
    PathParams GetInputFilePathParams 
    Security GetInputFileSecurity 
    
}

type GetInputFileResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

