package operations

import (
"openapi/pkg/models/shared")

type GetSchoolForTeacherPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSchoolForTeacherRequest struct {
    PathParams GetSchoolForTeacherPathParams 
    
}

type GetSchoolForTeacherResponse struct {
    ContentType string 
    NotFound *shared.NotFound 
    SchoolResponse *shared.SchoolResponse 
    StatusCode int64 
    
}

