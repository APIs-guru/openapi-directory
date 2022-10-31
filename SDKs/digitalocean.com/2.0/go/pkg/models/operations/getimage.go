package operations

import (
"openapi/pkg/models/shared")

type GetImagePathParams struct {
    ImageID interface{} `pathParam:"style=simple,explode=false,name=image_id"`
    
}

type GetImageRequest struct {
    PathParams GetImagePathParams 
    
}

type GetImage200ApplicationJSON struct {
    Image shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage `json:"image"`
    
}

type GetImage401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetImageResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetImage200ApplicationJSONObject *GetImage200ApplicationJSON 
    GetImage401ApplicationJSONObject *GetImage401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

