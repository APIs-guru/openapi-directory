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
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListAllKeys200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListAllKeys200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListAllKeys200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllKeys200ApplicationJSONSSHKeys struct {
	Fingerprint *string `json:"fingerprint"`
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	PublicKey   string  `json:"public_key"`
}

type ListAllKeys200ApplicationJSON struct {
	Links   *ListAllKeys200ApplicationJSONLinks    `json:"links"`
	Meta    ListAllKeys200ApplicationJSONMeta      `json:"meta"`
	SSHKeys []ListAllKeys200ApplicationJSONSSHKeys `json:"ssh_keys"`
}

type ListAllKeys401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListAllKeysResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllKeys200ApplicationJSONObject                       *ListAllKeys200ApplicationJSON
	ListAllKeys401ApplicationJSONObject                       *ListAllKeys401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
