package operations

import (
"openapi/pkg/models/shared")

type AssignDefaultProjectResourcesRequest struct {
    Request shared.Onev21projects1Percent7BprojectIDPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema `request:"mediaType=application/json"`
    
}

type AssignDefaultProjectResources200ApplicationJSON struct {
    Resources []shared.Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems `json:"resources,omitempty"`
    
}

type AssignDefaultProjectResources401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type AssignDefaultProjectResourcesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    AssignDefaultProjectResources200ApplicationJSONObject *AssignDefaultProjectResources200ApplicationJSON 
    AssignDefaultProjectResources401ApplicationJSONObject *AssignDefaultProjectResources401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

