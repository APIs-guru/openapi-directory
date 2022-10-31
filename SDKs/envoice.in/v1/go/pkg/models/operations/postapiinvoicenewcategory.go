package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIInvoiceNewcategoryHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type PostAPIInvoiceNewcategoryRequests struct {
	ApplicationXML                 []byte                                `request:"mediaType=application/xml"`
	InvoiceCategoryCreateAPIModel  *shared.InvoiceCategoryCreateAPIModel `request:"mediaType=application/json"`
	InvoiceCategoryCreateAPIModel1 *shared.InvoiceCategoryCreateAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	InvoiceCategoryCreateAPIModel2 *shared.InvoiceCategoryCreateAPIModel `request:"mediaType=text/json"`
	TextHTML                       []byte                                `request:"mediaType=text/html"`
	TextXML                        []byte                                `request:"mediaType=text/xml"`
}

type PostAPIInvoiceNewcategoryRequest struct {
	Headers PostAPIInvoiceNewcategoryHeaders
	Request PostAPIInvoiceNewcategoryRequests
}

type PostAPIInvoiceNewcategoryResponse struct {
	Body                    []byte
	ContentType             string
	InvoiceCategoryAPIModel *shared.InvoiceCategoryAPIModel
	StatusCode              int64
}
