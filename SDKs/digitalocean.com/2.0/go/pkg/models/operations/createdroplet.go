package operations

import (
"openapi/pkg/models/shared")

type CreateDropletRequestBodySingleDropletRequest struct {
    Backups *bool `json:"backups,omitempty"`
    Image interface{} `json:"image"`
    Ipv6 *bool `json:"ipv6,omitempty"`
    Monitoring *bool `json:"monitoring,omitempty"`
    Name string `json:"name"`
    PrivateNetworking *bool `json:"private_networking,omitempty"`
    Region string `json:"region"`
    Size string `json:"size"`
    SSHKeys []interface{} `json:"ssh_keys,omitempty"`
    Tags []string `json:"tags,omitempty"`
    UserData *string `json:"user_data,omitempty"`
    VpcUUID *string `json:"vpc_uuid,omitempty"`
    WithDropletAgent *bool `json:"with_droplet_agent,omitempty"`
    
}

type CreateDropletRequestBodyMultipleDropletRequest struct {
    Backups *bool `json:"backups,omitempty"`
    Image interface{} `json:"image"`
    Ipv6 *bool `json:"ipv6,omitempty"`
    Monitoring *bool `json:"monitoring,omitempty"`
    Names []string `json:"names"`
    PrivateNetworking *bool `json:"private_networking,omitempty"`
    Region string `json:"region"`
    Size string `json:"size"`
    SSHKeys []interface{} `json:"ssh_keys,omitempty"`
    Tags []string `json:"tags,omitempty"`
    UserData *string `json:"user_data,omitempty"`
    VpcUUID *string `json:"vpc_uuid,omitempty"`
    WithDropletAgent *bool `json:"with_droplet_agent,omitempty"`
    
}

type CreateDropletRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type CreateDroplet401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type CreateDropletResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateDroplet202ApplicationJSONOneOf *interface{} 
    CreateDroplet401ApplicationJSONObject *CreateDroplet401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

