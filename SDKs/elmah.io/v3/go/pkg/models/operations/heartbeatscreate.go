package operations

import (
"openapi/pkg/models/shared")

type HeartbeatsCreatePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    LogID string `pathParam:"style=simple,explode=false,name=logId"`
    
}

type HeartbeatsCreateRequests struct {
    CreateHeartbeat *shared.CreateHeartbeat `request:"mediaType=application/*+json"`
    CreateHeartbeat1 *shared.CreateHeartbeat `request:"mediaType=application/json"`
    CreateHeartbeat2 *shared.CreateHeartbeat `request:"mediaType=application/json-patch+json"`
    CreateHeartbeat3 *shared.CreateHeartbeat `request:"mediaType=text/json"`
    
}

type HeartbeatsCreateRequest struct {
    PathParams HeartbeatsCreatePathParams 
    Request *HeartbeatsCreateRequests 
    
}

type HeartbeatsCreateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

