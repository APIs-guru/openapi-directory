package operations

import (
"openapi/pkg/models/shared")

type ListRegions200ApplicationJSON struct {
    Regions []shared.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsPropertiesRegion `json:"regions,omitempty"`
    
}

type ListRegions401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type ListRegionsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ListRegions200ApplicationJSONObject *ListRegions200ApplicationJSON 
    ListRegions401ApplicationJSONObject *ListRegions401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

