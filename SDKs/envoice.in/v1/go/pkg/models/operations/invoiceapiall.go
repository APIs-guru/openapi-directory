package operations

import (
	"openapi/pkg/models/shared"
)

type InvoiceAPIAllQueryParams struct {
	QueryOptionsPage     *int32 `queryParam:"style=form,explode=true,name=queryOptions.page"`
	QueryOptionsPageSize *int32 `queryParam:"style=form,explode=true,name=queryOptions.pageSize"`
}

type InvoiceAPIAllHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type InvoiceAPIAllRequest struct {
	QueryParams InvoiceAPIAllQueryParams
	Headers     InvoiceAPIAllHeaders
}

type InvoiceAPIAllResponse struct {
	Body                             []byte
	ContentType                      string
	ListResultInvoiceDetailsAPIModel *shared.ListResultInvoiceDetailsAPIModel
	StatusCode                       int64
}
