package operations

import (
	"openapi/pkg/models/shared"
)

type UploadFileToLockerIDHeaders struct {
	Hmac *string `header:"name=hmac"`
	Path *string `header:"name=path"`
}

type UploadFileToLockerIDRequests struct {
	ApplicationOctetStream []byte `request:"mediaType=application/octet-stream"`
	ImageJpeg              []byte `request:"mediaType=image/jpeg"`
	ImageJpg               []byte `request:"mediaType=image/jpg"`
	ImagePdf               []byte `request:"mediaType=image/pdf"`
	ImagePng               []byte `request:"mediaType=image/png"`
}

type UploadFileToLockerIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type UploadFileToLockerIDRequest struct {
	Headers  UploadFileToLockerIDHeaders
	Request  *UploadFileToLockerIDRequests
	Security UploadFileToLockerIDSecurity
}

type UploadFileToLockerID400ApplicationJSON struct {
	Error            *interface{} `json:"error"`
	ErrorDescription *interface{} `json:"error_description"`
}

type UploadFileToLockerID401ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type UploadFileToLockerID500ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type UploadFileToLockerIDResponse struct {
	ContentType                                  string
	FileUploadResponse                           *interface{}
	StatusCode                                   int64
	UploadFileToLockerID400ApplicationJSONObject *UploadFileToLockerID400ApplicationJSON
	UploadFileToLockerID401ApplicationJSONObject *UploadFileToLockerID401ApplicationJSON
	UploadFileToLockerID500ApplicationJSONObject *UploadFileToLockerID500ApplicationJSON
}
