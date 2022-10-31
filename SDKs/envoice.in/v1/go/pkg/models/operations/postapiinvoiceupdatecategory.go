package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIInvoiceUpdatecategoryHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type PostAPIInvoiceUpdatecategoryRequests struct {
	ApplicationXML                 []byte                                `request:"mediaType=application/xml"`
	InvoiceCategoryUpdateAPIModel  *shared.InvoiceCategoryUpdateAPIModel `request:"mediaType=application/json"`
	InvoiceCategoryUpdateAPIModel1 *shared.InvoiceCategoryUpdateAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	InvoiceCategoryUpdateAPIModel2 *shared.InvoiceCategoryUpdateAPIModel `request:"mediaType=text/json"`
	TextHTML                       []byte                                `request:"mediaType=text/html"`
	TextXML                        []byte                                `request:"mediaType=text/xml"`
}

type PostAPIInvoiceUpdatecategoryRequest struct {
	Headers PostAPIInvoiceUpdatecategoryHeaders
	Request PostAPIInvoiceUpdatecategoryRequests
}

type PostAPIInvoiceUpdatecategoryResponse struct {
	Body                    []byte
	ContentType             string
	InvoiceCategoryAPIModel *shared.InvoiceCategoryAPIModel
	StatusCode              int64
}
