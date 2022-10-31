package operations

import (
"openapi/pkg/models/shared")

type LogsGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type LogsGetRequest struct {
    PathParams LogsGetPathParams 
    
}

type LogsGetResponse struct {
    Body []byte 
    ContentType string 
    Log *shared.Log 
    StatusCode int64 
    
}

