package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIInvoiceDeletecategoryHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type PostAPIInvoiceDeletecategoryRequests struct {
	ApplicationXML                 []byte                                `request:"mediaType=application/xml"`
	InvoiceCategoryDeleteAPIModel  *shared.InvoiceCategoryDeleteAPIModel `request:"mediaType=application/json"`
	InvoiceCategoryDeleteAPIModel1 *shared.InvoiceCategoryDeleteAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	InvoiceCategoryDeleteAPIModel2 *shared.InvoiceCategoryDeleteAPIModel `request:"mediaType=text/json"`
	TextHTML                       []byte                                `request:"mediaType=text/html"`
	TextXML                        []byte                                `request:"mediaType=text/xml"`
}

type PostAPIInvoiceDeletecategoryRequest struct {
	Headers PostAPIInvoiceDeletecategoryHeaders
	Request PostAPIInvoiceDeletecategoryRequests
}

type PostAPIInvoiceDeletecategoryResponse struct {
	Body                                                       []byte
	ContentType                                                string
	PostAPIInvoiceDeletecategory200ApplicationJSONInt32Integer *int32
	PostAPIInvoiceDeletecategory200TextJSONInt32Integer        *int32
	StatusCode                                                 int64
}
