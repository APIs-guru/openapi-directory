package operations

import (
"openapi/pkg/models/shared")

type GetSchoolForStudentPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSchoolForStudentRequest struct {
    PathParams GetSchoolForStudentPathParams 
    
}

type GetSchoolForStudentResponse struct {
    ContentType string 
    NotFound *shared.NotFound 
    SchoolResponse *shared.SchoolResponse 
    StatusCode int64 
    
}

