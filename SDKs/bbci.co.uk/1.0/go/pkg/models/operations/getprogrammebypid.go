package operations

import (
"openapi/pkg/models/shared")

type GetProgrammeByPidPathParams struct {
    Pid string `pathParam:"style=simple,explode=false,name=pid"`
    
}

type GetProgrammeByPidQueryParams struct {
    Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
    Mixin []string `queryParam:"style=form,explode=true,name=mixin"`
    Rights shared.RightsEnum `queryParam:"style=form,explode=true,name=rights"`
    
}

type GetProgrammeByPidRequest struct {
    PathParams GetProgrammeByPidPathParams 
    QueryParams GetProgrammeByPidQueryParams 
    
}

type GetProgrammeByPidResponse struct {
    ContentType string 
    StatusCode int64 
    Ibl *interface{} 
    
}

