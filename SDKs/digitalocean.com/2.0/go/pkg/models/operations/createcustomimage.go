package operations

import (
"openapi/pkg/models/shared")

type CreateCustomImageRequestBody struct {
    Description *string `json:"description,omitempty"`
    Distribution *shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesDistributionEnum `json:"distribution,omitempty"`
    Name string `json:"name"`
    Region shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
    Tags []string `json:"tags,omitempty"`
    URL string `json:"url"`
    
}

type CreateCustomImageRequest struct {
    Request CreateCustomImageRequestBody `request:"mediaType=application/json"`
    
}

type CreateCustomImage401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type CreateCustomImageResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateCustomImage202ApplicationJSONAny *interface{} 
    CreateCustomImage401ApplicationJSONObject *CreateCustomImage401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

