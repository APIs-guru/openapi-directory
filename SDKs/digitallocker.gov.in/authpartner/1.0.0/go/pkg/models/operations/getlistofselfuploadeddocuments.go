package operations

import (
	"openapi/pkg/models/shared"
)

type GetListOfSelfUploadedDocumentsSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetListOfSelfUploadedDocumentsRequest struct {
	Security GetListOfSelfUploadedDocumentsSecurity
}

type GetListOfSelfUploadedDocuments401ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetListOfSelfUploadedDocuments404ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetListOfSelfUploadedDocuments500ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetListOfSelfUploadedDocumentsResponse struct {
	ContentType                                            string
	GetListOfSelfUploadedDocuments401ApplicationJSONObject *GetListOfSelfUploadedDocuments401ApplicationJSON
	GetListOfSelfUploadedDocuments404ApplicationJSONObject *GetListOfSelfUploadedDocuments404ApplicationJSON
	GetListOfSelfUploadedDocuments500ApplicationJSONObject *GetListOfSelfUploadedDocuments500ApplicationJSON
	Sample                                                 *interface{}
	StatusCode                                             int64
}
