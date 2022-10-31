package operations

import (
"openapi/pkg/models/shared")

type GetBroadcastsByChannelPathParams struct {
    Channel string `pathParam:"style=simple,explode=false,name=channel"`
    
}

type GetBroadcastsByChannelQueryParams struct {
    Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
    From *string `queryParam:"style=form,explode=true,name=from"`
    Lang shared.LangEnum `queryParam:"style=form,explode=true,name=lang"`
    Mixin []string `queryParam:"style=form,explode=true,name=mixin"`
    PerPage int64 `queryParam:"style=form,explode=true,name=per_page"`
    Rights shared.RightsEnum `queryParam:"style=form,explode=true,name=rights"`
    
}

type GetBroadcastsByChannelRequest struct {
    PathParams GetBroadcastsByChannelPathParams 
    QueryParams GetBroadcastsByChannelQueryParams 
    
}

type GetBroadcastsByChannelResponse struct {
    ContentType string 
    StatusCode int64 
    Ibl *interface{} 
    
}

