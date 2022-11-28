package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchParametersForADocumentIDSecurity struct {
	Oauthsecurity shared.SchemeOauthsecurity `security:"scheme,type=oauth2"`
}

type GetSearchParametersForADocumentID400ApplicationJSON struct {
	Error            *interface{} `json:"error,omitempty"`
	ErrorDescription *interface{} `json:"error_description,omitempty"`
}

type GetSearchParametersForADocumentID401ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type GetSearchParametersForADocumentID500ApplicationJSON struct {
	Error            *interface{} `json:"error,omitempty"`
	ErrorDescription *interface{} `json:"error_description,omitempty"`
}

type GetSearchParametersForADocumentIDRequest struct {
	Request  *interface{} `request:"mediaType=application/x-www-form-urlencoded"`
	Security GetSearchParametersForADocumentIDSecurity
}

type GetSearchParametersForADocumentIDResponse struct {
	ContentType                                               string
	GetSearchParametersForADocumentID400ApplicationJSONObject *GetSearchParametersForADocumentID400ApplicationJSON
	GetSearchParametersForADocumentID401ApplicationJSONObject *GetSearchParametersForADocumentID401ApplicationJSON
	GetSearchParametersForADocumentID500ApplicationJSONObject *GetSearchParametersForADocumentID500ApplicationJSON
	SearchParametersResponse                                  []shared.SearchParametersResponse
	StatusCode                                                int64
}
