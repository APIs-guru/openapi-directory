package operations

import (
	"openapi/pkg/models/shared"
)

type InvoiceAPIDetailsQueryParams struct {
	ID int32 `queryParam:"style=form,explode=true,name=id"`
}

type InvoiceAPIDetailsHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type InvoiceAPIDetailsRequest struct {
	QueryParams InvoiceAPIDetailsQueryParams
	Headers     InvoiceAPIDetailsHeaders
}

type InvoiceAPIDetailsResponse struct {
	Body                       []byte
	ContentType                string
	InvoiceFullDetailsAPIModel *shared.InvoiceFullDetailsAPIModel
	StatusCode                 int64
}
