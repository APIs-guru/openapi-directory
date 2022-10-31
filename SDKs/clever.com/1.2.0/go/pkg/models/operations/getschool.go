package operations

import (
"openapi/pkg/models/shared")

type GetSchoolPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSchoolRequest struct {
    PathParams GetSchoolPathParams 
    
}

type GetSchoolResponse struct {
    ContentType string 
    NotFound *shared.NotFound 
    SchoolResponse *shared.SchoolResponse 
    StatusCode int64 
    
}

