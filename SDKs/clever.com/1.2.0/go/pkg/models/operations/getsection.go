package operations

import (
"openapi/pkg/models/shared")

type GetSectionPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSectionRequest struct {
    PathParams GetSectionPathParams 
    
}

type GetSectionResponse struct {
    ContentType string 
    NotFound *shared.NotFound 
    SectionResponse *shared.SectionResponse 
    StatusCode int64 
    
}

