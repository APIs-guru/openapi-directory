package operations

import (
"openapi/pkg/models/shared")

type GetScheduleByChannelPathParams struct {
    Channel string `pathParam:"style=simple,explode=false,name=channel"`
    Date string `pathParam:"style=simple,explode=false,name=date"`
    
}

type GetScheduleByChannelQueryParams struct {
    Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
    Lang shared.LangEnum `queryParam:"style=form,explode=true,name=lang"`
    Rights shared.RightsEnum `queryParam:"style=form,explode=true,name=rights"`
    
}

type GetScheduleByChannelRequest struct {
    PathParams GetScheduleByChannelPathParams 
    QueryParams GetScheduleByChannelQueryParams 
    
}

type GetScheduleByChannelResponse struct {
    ContentType string 
    StatusCode int64 
    Ibl *interface{} 
    
}

