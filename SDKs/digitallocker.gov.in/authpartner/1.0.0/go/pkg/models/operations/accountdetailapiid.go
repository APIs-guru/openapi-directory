package operations

import (
	"openapi/pkg/models/shared"
)

type AccountDetailAPIIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type AccountDetailAPIID401ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type AccountDetailAPIID500ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type AccountDetailAPIIDRequest struct {
	Security AccountDetailAPIIDSecurity
}

type AccountDetailAPIIDResponse struct {
	AccountDetailAPIID401ApplicationJSONObject *AccountDetailAPIID401ApplicationJSON
	AccountDetailAPIID500ApplicationJSONObject *AccountDetailAPIID500ApplicationJSON
	ContentType                                string
	Sample                                     *interface{}
	StatusCode                                 int64
}
