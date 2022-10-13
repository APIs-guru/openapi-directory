package operations

import (
	"openapi/pkg/models/shared"
)

type GetBarcodeEncodeTypesSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetBarcodeEncodeTypesRequest struct {
	Security GetBarcodeEncodeTypesSecurity
}

type GetBarcodeEncodeTypesResponse struct {
	ContentType string
	StatusCode  int64
}
