package operations

import (
	"openapi/pkg/models/shared"
)

type GetListOfIssuedDocumentsVersion1IDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetListOfIssuedDocumentsVersion1IDRequest struct {
	Security GetListOfIssuedDocumentsVersion1IDSecurity
}

type GetListOfIssuedDocumentsVersion1ID401ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetListOfIssuedDocumentsVersion1IDResponse struct {
	ContentType                                                string
	GetListOfIssuedDocumentsVersion1ID401ApplicationJSONObject *GetListOfIssuedDocumentsVersion1ID401ApplicationJSON
	GetListOfIssuedDocumentsVersion1ID500ApplicationJSONOneOf  *interface{}
	Sample                                                     *interface{}
	StatusCode                                                 int64
}
