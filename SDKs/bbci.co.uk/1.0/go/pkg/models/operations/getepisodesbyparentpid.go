package operations

import (
"openapi/pkg/models/shared")

type GetEpisodesByParentPidPathParams struct {
    Pid string `pathParam:"style=simple,explode=false,name=pid"`
    
}

type GetEpisodesByParentPidQueryParams struct {
    Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
    InitialChildCount int64 `queryParam:"style=form,explode=true,name=initial_child_count"`
    Rights shared.RightsEnum `queryParam:"style=form,explode=true,name=rights"`
    
}

type GetEpisodesByParentPidRequest struct {
    PathParams GetEpisodesByParentPidPathParams 
    QueryParams GetEpisodesByParentPidQueryParams 
    
}

type GetEpisodesByParentPidResponse struct {
    ContentType string 
    StatusCode int64 
    Ibl *interface{} 
    
}

