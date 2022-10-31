package operations

import (
	"openapi/pkg/models/shared"
)

type ListGarbageCollectionsPathParams struct {
	RegistryName string `pathParam:"style=simple,explode=false,name=registry_name"`
}

type ListGarbageCollectionsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListGarbageCollectionsRequest struct {
	PathParams  ListGarbageCollectionsPathParams
	QueryParams ListGarbageCollectionsQueryParams
}

type ListGarbageCollections200ApplicationJSON struct {
	GarbageCollections []shared.Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection `json:"garbage_collections,omitempty"`
}

type ListGarbageCollections401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListGarbageCollectionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListGarbageCollections200ApplicationJSONObject            *ListGarbageCollections200ApplicationJSON
	ListGarbageCollections401ApplicationJSONObject            *ListGarbageCollections401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
