package operations

import (
"openapi/pkg/models/shared")

type GetFloatingIPPathParams struct {
    FloatingIP string `pathParam:"style=simple,explode=false,name=floating_ip"`
    
}

type GetFloatingIPRequest struct {
    PathParams GetFloatingIPPathParams 
    
}

type GetFloatingIP200ApplicationJSON struct {
    FloatingIP *shared.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems `json:"floating_ip,omitempty"`
    
}

type GetFloatingIP401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetFloatingIPResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetFloatingIP200ApplicationJSONObject *GetFloatingIP200ApplicationJSON 
    GetFloatingIP401ApplicationJSONObject *GetFloatingIP401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

