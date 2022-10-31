package operations

import (
	"openapi/pkg/models/shared"
)

type InvoiceAPIDeleteHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type InvoiceAPIDeleteRequests struct {
	ApplicationXML         []byte                        `request:"mediaType=application/xml"`
	InvoiceDeleteAPIModel  *shared.InvoiceDeleteAPIModel `request:"mediaType=application/json"`
	InvoiceDeleteAPIModel1 *shared.InvoiceDeleteAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	InvoiceDeleteAPIModel2 *shared.InvoiceDeleteAPIModel `request:"mediaType=text/json"`
	TextHTML               []byte                        `request:"mediaType=text/html"`
	TextXML                []byte                        `request:"mediaType=text/xml"`
}

type InvoiceAPIDeleteRequest struct {
	Headers InvoiceAPIDeleteHeaders
	Request InvoiceAPIDeleteRequests
}

type InvoiceAPIDeleteResponse struct {
	Body                                           []byte
	ContentType                                    string
	InvoiceAPIDelete200ApplicationJSONInt32Integer *int32
	InvoiceAPIDelete200TextJSONInt32Integer        *int32
	StatusCode                                     int64
}
