package operations

import (
"openapi/pkg/models/shared")

type GetDefaultProject401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetDefaultProjectResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetDefaultProject200ApplicationJSONAny *interface{} 
    GetDefaultProject401ApplicationJSONObject *GetDefaultProject401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

