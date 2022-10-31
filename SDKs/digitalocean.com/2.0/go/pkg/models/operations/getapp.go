package operations

import (
"openapi/pkg/models/shared")

type GetAppPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAppQueryParams struct {
    Name *string `queryParam:"style=form,explode=true,name=name"`
    
}

type GetAppRequest struct {
    PathParams GetAppPathParams 
    QueryParams GetAppQueryParams 
    
}

type GetApp401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetAppResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetApp401ApplicationJSONObject *GetApp401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    Onev21appsPostResponses200ContentApplication1jsonSchema *shared.Onev21appsPostResponses200ContentApplication1jsonSchema 
    
}

