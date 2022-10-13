package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllTags200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListAllTags200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListAllTags200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListAllTags200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllTags200ApplicationJSONTagsResources struct {
	Count           *int64                                                                                                           `json:"count"`
	Databases       *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"databases"`
	Droplets        *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"droplets"`
	Imgages         *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"imgages"`
	LastTaggedURI   *string                                                                                                          `json:"last_tagged_uri"`
	VolumeSnapshots *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"volume_snapshots"`
	Volumes         *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"volumes"`
}

type ListAllTags200ApplicationJSONTags struct {
	Name      *string                                     `json:"name"`
	Resources *ListAllTags200ApplicationJSONTagsResources `json:"resources"`
}

type ListAllTags200ApplicationJSON struct {
	Links *ListAllTags200ApplicationJSONLinks `json:"links"`
	Meta  ListAllTags200ApplicationJSONMeta   `json:"meta"`
	Tags  []ListAllTags200ApplicationJSONTags `json:"tags"`
}

type ListAllTags401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListAllTagsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllTags200ApplicationJSONObject                       *ListAllTags200ApplicationJSON
	ListAllTags401ApplicationJSONObject                       *ListAllTags401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
