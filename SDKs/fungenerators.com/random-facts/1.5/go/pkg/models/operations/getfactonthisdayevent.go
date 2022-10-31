package operations

import (
"openapi/pkg/models/shared")

type GetFactOnthisdayEventQueryParams struct {
    Day *string `queryParam:"style=form,explode=true,name=day"`
    Month *string `queryParam:"style=form,explode=true,name=month"`
    
}

type GetFactOnthisdayEventSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetFactOnthisdayEventRequest struct {
    QueryParams GetFactOnthisdayEventQueryParams 
    Security GetFactOnthisdayEventSecurity 
    
}

type GetFactOnthisdayEventResponse struct {
    ContentType string 
    StatusCode int64 
    
}

