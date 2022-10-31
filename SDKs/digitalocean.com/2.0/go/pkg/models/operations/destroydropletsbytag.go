package operations

import (
"openapi/pkg/models/shared")

type DestroyDropletsByTagQueryParams struct {
    TagName string `queryParam:"style=form,explode=true,name=tag_name"`
    
}

type DestroyDropletsByTagRequest struct {
    QueryParams DestroyDropletsByTagQueryParams 
    
}

type DestroyDropletsByTag401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DestroyDropletsByTagResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DestroyDropletsByTag401ApplicationJSONObject *DestroyDropletsByTag401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

