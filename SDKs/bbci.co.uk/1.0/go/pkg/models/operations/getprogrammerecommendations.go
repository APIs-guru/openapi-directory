package operations

import (
"openapi/pkg/models/shared")

type GetProgrammeRecommendationsPathParams struct {
    Pid string `pathParam:"style=simple,explode=false,name=pid"`
    
}

type GetProgrammeRecommendationsQueryParams struct {
    Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
    Page int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage int64 `queryParam:"style=form,explode=true,name=per_page"`
    Rights shared.RightsEnum `queryParam:"style=form,explode=true,name=rights"`
    
}

type GetProgrammeRecommendationsRequest struct {
    PathParams GetProgrammeRecommendationsPathParams 
    QueryParams GetProgrammeRecommendationsQueryParams 
    
}

type GetProgrammeRecommendationsResponse struct {
    ContentType string 
    StatusCode int64 
    Ibl *interface{} 
    
}

