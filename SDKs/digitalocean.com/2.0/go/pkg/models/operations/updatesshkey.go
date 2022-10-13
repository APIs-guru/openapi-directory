package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSSHKeyPathParams struct {
	SSHKeyIdentifier interface{} `pathParam:"style=simple,explode=false,name=ssh_key_identifier"`
}

type UpdateSSHKeyRequestBody struct {
	Name *string `json:"name"`
}

type UpdateSSHKeyRequest struct {
	PathParams UpdateSSHKeyPathParams
	Request    UpdateSSHKeyRequestBody `request:"mediaType=application/json"`
}

type UpdateSSHKey401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type UpdateSSHKeyResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateSSHKey200ApplicationJSONAny                         *interface{}
	UpdateSSHKey401ApplicationJSONObject                      *UpdateSSHKey401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
