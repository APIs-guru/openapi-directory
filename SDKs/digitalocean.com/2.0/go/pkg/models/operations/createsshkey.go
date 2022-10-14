package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSSHKeyRequest struct {
	Request shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSSHKeysItems `request:"mediaType=application/json"`
}

type CreateSSHKey401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateSSHKeyResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateSSHKey201ApplicationJSONAny                         *interface{}
	CreateSSHKey401ApplicationJSONObject                      *CreateSSHKey401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
