package operations

import (
"openapi/pkg/models/shared")

type DataPointsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DataPointsDeleteRequest struct {
    PathParams DataPointsDeletePathParams 
    
}

type DataPointsDeleteResponse struct {
    APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

