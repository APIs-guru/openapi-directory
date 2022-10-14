package operations

import (
	"openapi/pkg/models/shared"
)

type GetListOfDocumentsProvidedByAnIssuerIDSecurity struct {
	Oauthsecurity shared.SchemeOauthsecurity `security:"scheme,type=oauth2"`
}

type GetListOfDocumentsProvidedByAnIssuerIDRequest struct {
	Request  *interface{} `request:"mediaType=application/x-www-form-urlencoded"`
	Security GetListOfDocumentsProvidedByAnIssuerIDSecurity
}

type GetListOfDocumentsProvidedByAnIssuerID400ApplicationJSON struct {
	Error            *interface{} `json:"error,omitempty"`
	ErrorDescription *interface{} `json:"error_description,omitempty"`
}

type GetListOfDocumentsProvidedByAnIssuerID401ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type GetListOfDocumentsProvidedByAnIssuerID500ApplicationJSON struct {
	Error            *interface{} `json:"error,omitempty"`
	ErrorDescription *interface{} `json:"error_description,omitempty"`
}

type GetListOfDocumentsProvidedByAnIssuerIDResponse struct {
	ContentType                                                    string
	DocTypeResponse                                                *shared.DocTypeResponse
	GetListOfDocumentsProvidedByAnIssuerID400ApplicationJSONObject *GetListOfDocumentsProvidedByAnIssuerID400ApplicationJSON
	GetListOfDocumentsProvidedByAnIssuerID401ApplicationJSONObject *GetListOfDocumentsProvidedByAnIssuerID401ApplicationJSON
	GetListOfDocumentsProvidedByAnIssuerID500ApplicationJSONObject *GetListOfDocumentsProvidedByAnIssuerID500ApplicationJSON
	StatusCode                                                     int64
}
