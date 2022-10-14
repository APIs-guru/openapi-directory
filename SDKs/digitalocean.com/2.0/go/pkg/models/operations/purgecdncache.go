package operations

import (
	"openapi/pkg/models/shared"
)

type PurgeCdnCachePathParams struct {
	CdnID string `pathParam:"style=simple,explode=false,name=cdn_id"`
}

type PurgeCdnCacheRequestBody struct {
	Files []string `json:"files"`
}

type PurgeCdnCacheRequest struct {
	PathParams PurgeCdnCachePathParams
	Request    PurgeCdnCacheRequestBody `request:"mediaType=application/json"`
}

type PurgeCdnCache401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type PurgeCdnCacheResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	PurgeCdnCache401ApplicationJSONObject                     *PurgeCdnCache401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
