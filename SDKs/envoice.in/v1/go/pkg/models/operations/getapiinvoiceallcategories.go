package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIInvoiceAllcategoriesQueryParams struct {
	Query *string `queryParam:"style=form,explode=true,name=query"`
}

type GetAPIInvoiceAllcategoriesHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type GetAPIInvoiceAllcategoriesRequest struct {
	QueryParams GetAPIInvoiceAllcategoriesQueryParams
	Headers     GetAPIInvoiceAllcategoriesHeaders
}

type GetAPIInvoiceAllcategoriesResponse struct {
	Body                              []byte
	ContentType                       string
	ListResultInvoiceCategoryAPIModel *shared.ListResultInvoiceCategoryAPIModel
	StatusCode                        int64
}
