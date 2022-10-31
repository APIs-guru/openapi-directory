package operations

import (
"openapi/pkg/models/shared")

type GetDistrictStatusPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetDistrictStatusRequest struct {
    PathParams GetDistrictStatusPathParams 
    
}

type GetDistrictStatusResponse struct {
    ContentType string 
    DistrictStatusResponses *shared.DistrictStatusResponses 
    NotFound *shared.NotFound 
    StatusCode int64 
    
}

