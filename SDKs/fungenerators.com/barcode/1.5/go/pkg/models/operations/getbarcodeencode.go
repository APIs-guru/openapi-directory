package operations

import (
	"openapi/pkg/models/shared"
)

type GetBarcodeEncodeQueryParams struct {
	Barcodeformat *string `queryParam:"style=form,explode=true,name=barcodeformat"`
	Number        string  `queryParam:"style=form,explode=true,name=number"`
	Outputformat  *string `queryParam:"style=form,explode=true,name=outputformat"`
	Totalheight   *int64  `queryParam:"style=form,explode=true,name=totalheight"`
	Widthfactor   *int64  `queryParam:"style=form,explode=true,name=widthfactor"`
}

type GetBarcodeEncodeSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetBarcodeEncodeRequest struct {
	QueryParams GetBarcodeEncodeQueryParams
	Security    GetBarcodeEncodeSecurity
}

type GetBarcodeEncodeResponse struct {
	ContentType string
	StatusCode  int64
}
