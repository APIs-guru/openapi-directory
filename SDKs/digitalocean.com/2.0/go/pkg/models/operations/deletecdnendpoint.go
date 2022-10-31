package operations

import (
"openapi/pkg/models/shared")

type DeleteCdnEndpointPathParams struct {
    CdnID string `pathParam:"style=simple,explode=false,name=cdn_id"`
    
}

type DeleteCdnEndpointRequest struct {
    PathParams DeleteCdnEndpointPathParams 
    
}

type DeleteCdnEndpoint401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DeleteCdnEndpointResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeleteCdnEndpoint401ApplicationJSONObject *DeleteCdnEndpoint401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

