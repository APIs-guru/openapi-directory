package operations

import (
"openapi/pkg/models/shared")

type ListFloatingIps200ApplicationJSONFloatingIpsRegion struct {
    Available bool `json:"available"`
    Features interface{} `json:"features"`
    Name string `json:"name"`
    Sizes interface{} `json:"sizes"`
    Slug string `json:"slug"`
    
}

type ListFloatingIps200ApplicationJSONFloatingIps struct {
    Droplet *interface{} `json:"droplet,omitempty"`
    IP *string `json:"ip,omitempty"`
    Locked *bool `json:"locked,omitempty"`
    Region *ListFloatingIps200ApplicationJSONFloatingIpsRegion `json:"region,omitempty"`
    
}

type ListFloatingIps200ApplicationJSONLinksPages1 struct {
    Last *string `json:"last,omitempty"`
    Next *string `json:"next,omitempty"`
    
}

type ListFloatingIps200ApplicationJSONLinksPages2 struct {
    First *string `json:"first,omitempty"`
    Prev *string `json:"prev,omitempty"`
    
}

type ListFloatingIps200ApplicationJSONLinks struct {
    Pages *interface{} `json:"pages,omitempty"`
    
}

type ListFloatingIps200ApplicationJSONMeta struct {
    Total int64 `json:"total"`
    
}

type ListFloatingIps200ApplicationJSON struct {
    FloatingIps []ListFloatingIps200ApplicationJSONFloatingIps `json:"floating_ips,omitempty"`
    Links *ListFloatingIps200ApplicationJSONLinks `json:"links,omitempty"`
    Meta ListFloatingIps200ApplicationJSONMeta `json:"meta"`
    
}

type ListFloatingIps401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type ListFloatingIpsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ListFloatingIps200ApplicationJSONObject *ListFloatingIps200ApplicationJSON 
    ListFloatingIps401ApplicationJSONObject *ListFloatingIps401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

