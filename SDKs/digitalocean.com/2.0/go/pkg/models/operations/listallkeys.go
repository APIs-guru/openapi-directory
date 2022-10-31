package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllKeysQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAllKeysRequest struct {
	QueryParams ListAllKeysQueryParams
}

type ListAllKeys200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListAllKeys200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListAllKeys200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListAllKeys200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllKeys200ApplicationJSONSSHKeys struct {
	Fingerprint *string `json:"fingerprint,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Name        string  `json:"name"`
	PublicKey   string  `json:"public_key"`
}

type ListAllKeys200ApplicationJSON struct {
	Links   *ListAllKeys200ApplicationJSONLinks    `json:"links,omitempty"`
	Meta    ListAllKeys200ApplicationJSONMeta      `json:"meta"`
	SSHKeys []ListAllKeys200ApplicationJSONSSHKeys `json:"ssh_keys,omitempty"`
}

type ListAllKeys401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllKeysResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllKeys200ApplicationJSONObject                       *ListAllKeys200ApplicationJSON
	ListAllKeys401ApplicationJSONObject                       *ListAllKeys401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
