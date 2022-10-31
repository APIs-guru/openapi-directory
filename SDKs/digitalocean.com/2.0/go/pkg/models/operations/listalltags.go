package operations

import (
"openapi/pkg/models/shared")

type ListAllTags200ApplicationJSONLinksPages1 struct {
    Last *string `json:"last,omitempty"`
    Next *string `json:"next,omitempty"`
    
}

type ListAllTags200ApplicationJSONLinksPages2 struct {
    First *string `json:"first,omitempty"`
    Prev *string `json:"prev,omitempty"`
    
}

type ListAllTags200ApplicationJSONLinks struct {
    Pages *interface{} `json:"pages,omitempty"`
    
}

type ListAllTags200ApplicationJSONMeta struct {
    Total int64 `json:"total"`
    
}

type ListAllTags200ApplicationJSONTagsResources struct {
    Count *int64 `json:"count,omitempty"`
    Databases *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"databases,omitempty"`
    Droplets *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"droplets,omitempty"`
    Imgages *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"imgages,omitempty"`
    LastTaggedURI *string `json:"last_tagged_uri,omitempty"`
    VolumeSnapshots *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"volume_snapshots,omitempty"`
    Volumes *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"volumes,omitempty"`
    
}

type ListAllTags200ApplicationJSONTags struct {
    Name *string `json:"name,omitempty"`
    Resources *ListAllTags200ApplicationJSONTagsResources `json:"resources,omitempty"`
    
}

type ListAllTags200ApplicationJSON struct {
    Links *ListAllTags200ApplicationJSONLinks `json:"links,omitempty"`
    Meta ListAllTags200ApplicationJSONMeta `json:"meta"`
    Tags []ListAllTags200ApplicationJSONTags `json:"tags,omitempty"`
    
}

type ListAllTags401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type ListAllTagsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ListAllTags200ApplicationJSONObject *ListAllTags200ApplicationJSON 
    ListAllTags401ApplicationJSONObject *ListAllTags401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

