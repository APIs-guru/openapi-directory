package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoryManifestPathParams struct {
	ManifestDigest string `pathParam:"style=simple,explode=false,name=manifest_digest"`
	RegistryName   string `pathParam:"style=simple,explode=false,name=registry_name"`
	RepositoryName string `pathParam:"style=simple,explode=false,name=repository_name"`
}

type DeleteRepositoryManifestRequest struct {
	PathParams DeleteRepositoryManifestPathParams
}

type DeleteRepositoryManifest401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type DeleteRepositoryManifestResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteRepositoryManifest401ApplicationJSONObject          *DeleteRepositoryManifest401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
