package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListRegistryRepositoriesPathParams struct {
	RegistryName string `pathParam:"style=simple,explode=false,name=registry_name"`
}

type ListRegistryRepositoriesQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListRegistryRepositoriesRequest struct {
	PathParams  ListRegistryRepositoriesPathParams
	QueryParams ListRegistryRepositoriesQueryParams
}

type ListRegistryRepositories200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListRegistryRepositories200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListRegistryRepositories200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListRegistryRepositories200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListRegistryRepositories200ApplicationJSONRepositoriesLatestTag struct {
	CompressedSizeBytes *int64     `json:"compressed_size_bytes"`
	ManifestDigest      *string    `json:"manifest_digest"`
	RegistryName        *string    `json:"registry_name"`
	RepositoryName      *string    `json:"repository_name"`
	SizeBytes           *int64     `json:"size_bytes"`
	Tag                 *string    `json:"tag"`
	UpdatedAt           *time.Time `json:"updated_at"`
}

type ListRegistryRepositories200ApplicationJSONRepositories struct {
	LatestTag    *ListRegistryRepositories200ApplicationJSONRepositoriesLatestTag `json:"latest_tag"`
	Name         *string                                                          `json:"name"`
	RegistryName *string                                                          `json:"registry_name"`
	TagCount     *int64                                                           `json:"tag_count"`
}

type ListRegistryRepositories200ApplicationJSON struct {
	Links        *ListRegistryRepositories200ApplicationJSONLinks         `json:"links"`
	Meta         ListRegistryRepositories200ApplicationJSONMeta           `json:"meta"`
	Repositories []ListRegistryRepositories200ApplicationJSONRepositories `json:"repositories"`
}

type ListRegistryRepositories401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListRegistryRepositoriesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListRegistryRepositories200ApplicationJSONObject          *ListRegistryRepositories200ApplicationJSON
	ListRegistryRepositories401ApplicationJSONObject          *ListRegistryRepositories401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
