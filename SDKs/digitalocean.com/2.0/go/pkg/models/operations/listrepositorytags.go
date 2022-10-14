package operations

import (
	"openapi/pkg/models/shared"
)

type ListRepositoryTagsPathParams struct {
	RegistryName   string `pathParam:"style=simple,explode=false,name=registry_name"`
	RepositoryName string `pathParam:"style=simple,explode=false,name=repository_name"`
}

type ListRepositoryTagsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListRepositoryTagsRequest struct {
	PathParams  ListRepositoryTagsPathParams
	QueryParams ListRepositoryTagsQueryParams
}

type ListRepositoryTags200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListRepositoryTags200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListRepositoryTags200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListRepositoryTags200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListRepositoryTags200ApplicationJSON struct {
	Links *ListRepositoryTags200ApplicationJSONLinks                                                                                                             `json:"links,omitempty"`
	Meta  ListRepositoryTags200ApplicationJSONMeta                                                                                                               `json:"meta"`
	Tags  []shared.Onev21registry1Percent7BregistryNamePercent7DGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesRepositoriesItemsPropertiesLatestTag `json:"tags,omitempty"`
}

type ListRepositoryTags401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListRepositoryTagsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListRepositoryTags200ApplicationJSONObject                *ListRepositoryTags200ApplicationJSON
	ListRepositoryTags401ApplicationJSONObject                *ListRepositoryTags401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
