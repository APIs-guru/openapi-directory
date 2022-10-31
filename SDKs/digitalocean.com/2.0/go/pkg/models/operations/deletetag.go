package operations

import (
"openapi/pkg/models/shared")

type DeleteTagPathParams struct {
    TagID string `pathParam:"style=simple,explode=false,name=tag_id"`
    
}

type DeleteTagRequest struct {
    PathParams DeleteTagPathParams 
    
}

type DeleteTag401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DeleteTagResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeleteTag401ApplicationJSONObject *DeleteTag401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

