package operations

import (
"openapi/pkg/models/shared")

type GetSchoolForSectionPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSchoolForSectionRequest struct {
    PathParams GetSchoolForSectionPathParams 
    
}

type GetSchoolForSectionResponse struct {
    ContentType string 
    NotFound *shared.NotFound 
    SchoolResponse *shared.SchoolResponse 
    StatusCode int64 
    
}

