package operations

import (
"openapi/pkg/models/shared")

type GetDistrictAdminPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetDistrictAdminRequest struct {
    PathParams GetDistrictAdminPathParams 
    
}

type GetDistrictAdminResponse struct {
    ContentType string 
    DistrictAdminResponse *shared.DistrictAdminResponse 
    NotFound *shared.NotFound 
    StatusCode int64 
    
}

