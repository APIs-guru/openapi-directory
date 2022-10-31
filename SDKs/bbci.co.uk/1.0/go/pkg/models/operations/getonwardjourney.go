package operations

import (
"openapi/pkg/models/shared")

type GetOnwardJourneyPathParams struct {
    Pid string `pathParam:"style=simple,explode=false,name=pid"`
    
}

type GetOnwardJourneyQueryParams struct {
    Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
    Rights shared.RightsEnum `queryParam:"style=form,explode=true,name=rights"`
    
}

type GetOnwardJourneyRequest struct {
    PathParams GetOnwardJourneyPathParams 
    QueryParams GetOnwardJourneyQueryParams 
    
}

type GetOnwardJourneyResponse struct {
    ContentType string 
    StatusCode int64 
    Ibl *interface{} 
    
}

