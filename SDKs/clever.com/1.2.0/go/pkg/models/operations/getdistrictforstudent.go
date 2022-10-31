package operations

import (
"openapi/pkg/models/shared")

type GetDistrictForStudentPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetDistrictForStudentRequest struct {
    PathParams GetDistrictForStudentPathParams 
    
}

type GetDistrictForStudentResponse struct {
    ContentType string 
    DistrictResponse *shared.DistrictResponse 
    NotFound *shared.NotFound 
    StatusCode int64 
    
}

