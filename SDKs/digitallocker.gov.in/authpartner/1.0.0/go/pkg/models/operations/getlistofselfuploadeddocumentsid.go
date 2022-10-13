package operations

import (
	"openapi/pkg/models/shared"
)

type GetListOfSelfUploadedDocumentsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetListOfSelfUploadedDocumentsIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetListOfSelfUploadedDocumentsIDRequest struct {
	PathParams GetListOfSelfUploadedDocumentsIDPathParams
	Security   GetListOfSelfUploadedDocumentsIDSecurity
}

type GetListOfSelfUploadedDocumentsID401ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetListOfSelfUploadedDocumentsID404ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetListOfSelfUploadedDocumentsID500ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetListOfSelfUploadedDocumentsIDResponse struct {
	ContentType                                              string
	GetListOfSelfUploadedDocumentsID401ApplicationJSONObject *GetListOfSelfUploadedDocumentsID401ApplicationJSON
	GetListOfSelfUploadedDocumentsID404ApplicationJSONObject *GetListOfSelfUploadedDocumentsID404ApplicationJSON
	GetListOfSelfUploadedDocumentsID500ApplicationJSONObject *GetListOfSelfUploadedDocumentsID500ApplicationJSON
	Sample                                                   *interface{}
	StatusCode                                               int64
}
