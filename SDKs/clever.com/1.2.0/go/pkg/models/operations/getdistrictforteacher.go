package operations

import (
"openapi/pkg/models/shared")

type GetDistrictForTeacherPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetDistrictForTeacherRequest struct {
    PathParams GetDistrictForTeacherPathParams 
    
}

type GetDistrictForTeacherResponse struct {
    ContentType string 
    DistrictResponse *shared.DistrictResponse 
    NotFound *shared.NotFound 
    StatusCode int64 
    
}

