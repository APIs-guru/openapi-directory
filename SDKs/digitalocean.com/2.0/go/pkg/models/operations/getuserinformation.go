package operations

import (
"openapi/pkg/models/shared")

type GetUserInformation401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetUserInformationResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetUserInformation200ApplicationJSONAny *interface{} 
    GetUserInformation401ApplicationJSONObject *GetUserInformation401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

