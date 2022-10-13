package operations

import (
	"openapi/pkg/models/shared"
)

type PostBarcodeDecodeRequestBody struct {
	Barimage []byte `form:"name=barimage"`
}

type PostBarcodeDecodeSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostBarcodeDecodeRequest struct {
	Request  *PostBarcodeDecodeRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security PostBarcodeDecodeSecurity
}

type PostBarcodeDecodeResponse struct {
	ContentType string
	StatusCode  int64
}
