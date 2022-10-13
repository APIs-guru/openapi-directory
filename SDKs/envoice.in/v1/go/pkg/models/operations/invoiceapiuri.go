package operations

import (
	"openapi/pkg/models/shared"
)

type InvoiceAPIURIQueryParams struct {
	ID int32 `queryParam:"style=form,explode=true,name=id"`
}

type InvoiceAPIURIHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type InvoiceAPIURIRequest struct {
	QueryParams InvoiceAPIURIQueryParams
	Headers     InvoiceAPIURIHeaders
}

type InvoiceAPIURIResponse struct {
	Body               []byte
	ContentType        string
	InvoiceURIAPIModel *shared.InvoiceURIAPIModel
	StatusCode         int64
}
