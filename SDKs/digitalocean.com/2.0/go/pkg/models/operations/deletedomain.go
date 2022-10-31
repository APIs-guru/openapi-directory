package operations

import (
"openapi/pkg/models/shared")

type DeleteDomainPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
    
}

type DeleteDomainRequest struct {
    PathParams DeleteDomainPathParams 
    
}

type DeleteDomain401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DeleteDomainResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeleteDomain401ApplicationJSONObject *DeleteDomain401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

