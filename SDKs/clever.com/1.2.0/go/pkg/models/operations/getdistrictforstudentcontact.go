package operations

import (
"openapi/pkg/models/shared")

type GetDistrictForStudentContactPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetDistrictForStudentContactRequest struct {
    PathParams GetDistrictForStudentContactPathParams 
    
}

type GetDistrictForStudentContactResponse struct {
    ContentType string 
    DistrictResponse *shared.DistrictResponse 
    NotFound *shared.NotFound 
    StatusCode int64 
    
}

