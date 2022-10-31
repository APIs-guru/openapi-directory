package operations

import (
"openapi/pkg/models/shared")

type GetDistrictForSchoolPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetDistrictForSchoolRequest struct {
    PathParams GetDistrictForSchoolPathParams 
    
}

type GetDistrictForSchoolResponse struct {
    ContentType string 
    DistrictResponse *shared.DistrictResponse 
    NotFound *shared.NotFound 
    StatusCode int64 
    
}

