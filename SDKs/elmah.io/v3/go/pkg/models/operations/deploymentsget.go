package operations

import (
"openapi/pkg/models/shared")

type DeploymentsGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeploymentsGetRequest struct {
    PathParams DeploymentsGetPathParams 
    
}

type DeploymentsGetResponse struct {
    Body []byte 
    ContentType string 
    Deployment *shared.Deployment 
    StatusCode int64 
    
}

