package operations

import (
"openapi/pkg/models/shared")

type GetClipsPathParams struct {
    Pid string `pathParam:"style=simple,explode=false,name=pid"`
    
}

type GetClipsQueryParams struct {
    Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
    Rights shared.RightsEnum `queryParam:"style=form,explode=true,name=rights"`
    
}

type GetClipsRequest struct {
    PathParams GetClipsPathParams 
    QueryParams GetClipsQueryParams 
    
}

type GetClipsResponse struct {
    ContentType string 
    StatusCode int64 
    Ibl *interface{} 
    
}

