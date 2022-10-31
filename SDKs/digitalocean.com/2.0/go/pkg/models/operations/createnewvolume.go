package operations

import (
"openapi/pkg/models/shared")

type CreateNewVolumeRequestBody1 struct {
    CreatedAt *string `json:"created_at,omitempty"`
    Description *string `json:"description,omitempty"`
    DropletIds []int64 `json:"droplet_ids,omitempty"`
    FilesystemLabel map[string]interface{} `json:"filesystem_label,omitempty"`
    FilesystemType string `json:"filesystem_type"`
    ID *string `json:"id,omitempty"`
    Name string `json:"name"`
    Region shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
    SizeGigabytes int64 `json:"size_gigabytes"`
    SnapshotID *string `json:"snapshot_id,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

type CreateNewVolumeRequestBody2 struct {
    CreatedAt *string `json:"created_at,omitempty"`
    Description *string `json:"description,omitempty"`
    DropletIds []int64 `json:"droplet_ids,omitempty"`
    FilesystemLabel map[string]interface{} `json:"filesystem_label,omitempty"`
    FilesystemType string `json:"filesystem_type"`
    ID *string `json:"id,omitempty"`
    Name string `json:"name"`
    Region shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
    SizeGigabytes int64 `json:"size_gigabytes"`
    SnapshotID *string `json:"snapshot_id,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

type CreateNewVolumeRequest struct {
    Request interface{} `request:"mediaType=application/json"`
    
}

type CreateNewVolume401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type CreateNewVolumeResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateNewVolume201ApplicationJSONAny *interface{} 
    CreateNewVolume401ApplicationJSONObject *CreateNewVolume401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

