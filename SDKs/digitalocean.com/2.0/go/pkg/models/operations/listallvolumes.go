package operations

import (
"openapi/pkg/models/shared")

type ListAllVolumesQueryParams struct {
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Region *shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `queryParam:"style=form,explode=true,name=region"`
    
}

type ListAllVolumesRequest struct {
    QueryParams ListAllVolumesQueryParams 
    
}

type ListAllVolumes200ApplicationJSONLinksPages1 struct {
    Last *string `json:"last,omitempty"`
    Next *string `json:"next,omitempty"`
    
}

type ListAllVolumes200ApplicationJSONLinksPages2 struct {
    First *string `json:"first,omitempty"`
    Prev *string `json:"prev,omitempty"`
    
}

type ListAllVolumes200ApplicationJSONLinks struct {
    Pages *interface{} `json:"pages,omitempty"`
    
}

type ListAllVolumes200ApplicationJSONMeta struct {
    Total int64 `json:"total"`
    
}

type ListAllVolumes200ApplicationJSONVolumesRegion struct {
    Available bool `json:"available"`
    Features interface{} `json:"features"`
    Name string `json:"name"`
    Sizes interface{} `json:"sizes"`
    Slug string `json:"slug"`
    
}

type ListAllVolumes200ApplicationJSONVolumes struct {
    CreatedAt *string `json:"created_at,omitempty"`
    Description *string `json:"description,omitempty"`
    DropletIds []int64 `json:"droplet_ids,omitempty"`
    FilesystemLabel *string `json:"filesystem_label,omitempty"`
    FilesystemType *string `json:"filesystem_type,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Region *ListAllVolumes200ApplicationJSONVolumesRegion `json:"region,omitempty"`
    SizeGigabytes *int64 `json:"size_gigabytes,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

type ListAllVolumes200ApplicationJSON struct {
    Links *ListAllVolumes200ApplicationJSONLinks `json:"links,omitempty"`
    Meta ListAllVolumes200ApplicationJSONMeta `json:"meta"`
    Volumes []ListAllVolumes200ApplicationJSONVolumes `json:"volumes"`
    
}

type ListAllVolumes401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type ListAllVolumesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ListAllVolumes200ApplicationJSONObject *ListAllVolumes200ApplicationJSON 
    ListAllVolumes401ApplicationJSONObject *ListAllVolumes401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

