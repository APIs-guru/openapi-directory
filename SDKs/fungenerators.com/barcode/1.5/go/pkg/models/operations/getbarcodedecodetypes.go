package operations

import (
	"openapi/pkg/models/shared"
)

type GetBarcodeDecodeTypesSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetBarcodeDecodeTypesRequest struct {
	Security GetBarcodeDecodeTypesSecurity
}

type GetBarcodeDecodeTypesResponse struct {
	ContentType string
	StatusCode  int64
}
