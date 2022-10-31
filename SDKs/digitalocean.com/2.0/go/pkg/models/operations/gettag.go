package operations

import (
"openapi/pkg/models/shared")

type GetTagPathParams struct {
    TagID string `pathParam:"style=simple,explode=false,name=tag_id"`
    
}

type GetTagRequest struct {
    PathParams GetTagPathParams 
    
}

type GetTag200ApplicationJSON struct {
    Tag *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems `json:"tag,omitempty"`
    
}

type GetTag401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetTagResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetTag200ApplicationJSONObject *GetTag200ApplicationJSON 
    GetTag401ApplicationJSONObject *GetTag401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

