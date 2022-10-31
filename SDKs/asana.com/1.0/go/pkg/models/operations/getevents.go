package operations

import (
"openapi/pkg/models/shared")

type GetEventsQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    Resource string `queryParam:"style=form,explode=true,name=resource"`
    Sync *string `queryParam:"style=form,explode=true,name=sync"`
    
}

type GetEventsRequest struct {
    QueryParams GetEventsQueryParams 
    
}

type GetEvents200ApplicationJSON struct {
    Data []shared.EventResponse `json:"data,omitempty"`
    Sync *string `json:"sync,omitempty"`
    
}

type GetEventsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetEvents200ApplicationJSONObject *GetEvents200ApplicationJSON 
    
}

