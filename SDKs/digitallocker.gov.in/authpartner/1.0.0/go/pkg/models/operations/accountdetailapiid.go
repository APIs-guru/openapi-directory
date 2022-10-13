package operations

import (
	"openapi/pkg/models/shared"
)

type AccountDetailAPIIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type AccountDetailAPIIDRequest struct {
	Security AccountDetailAPIIDSecurity
}

type AccountDetailAPIID401ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type AccountDetailAPIID500ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type AccountDetailAPIIDResponse struct {
	AccountDetailAPIID401ApplicationJSONObject *AccountDetailAPIID401ApplicationJSON
	AccountDetailAPIID500ApplicationJSONObject *AccountDetailAPIID500ApplicationJSON
	ContentType                                string
	Sample                                     *interface{}
	StatusCode                                 int64
}
