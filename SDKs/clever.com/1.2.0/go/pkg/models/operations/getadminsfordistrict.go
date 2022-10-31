package operations

import (
"openapi/pkg/models/shared")

type GetAdminsForDistrictPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAdminsForDistrictRequest struct {
    PathParams GetAdminsForDistrictPathParams 
    
}

type GetAdminsForDistrictResponse struct {
    ContentType string 
    DistrictAdminsResponse *shared.DistrictAdminsResponse 
    NotFound *shared.NotFound 
    StatusCode int64 
    
}

