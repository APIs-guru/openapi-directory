package operations

import (
	"openapi/pkg/models/shared"
)

type DestroySSHKeyPathParams struct {
	SSHKeyIdentifier interface{} `pathParam:"style=simple,explode=false,name=ssh_key_identifier"`
}

type DestroySSHKeyRequest struct {
	PathParams DestroySSHKeyPathParams
}

type DestroySSHKey401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type DestroySSHKeyResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DestroySSHKey401ApplicationJSONObject                     *DestroySSHKey401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
