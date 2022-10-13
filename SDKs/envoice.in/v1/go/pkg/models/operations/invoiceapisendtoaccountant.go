package operations

import (
	"openapi/pkg/models/shared"
)

type InvoiceAPISendToAccountantHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type InvoiceAPISendToAccountantRequests struct {
	ApplicationXML                   []byte                                  `request:"mediaType=application/xml"`
	SendInvoiceToAccountantAPIModel  *shared.SendInvoiceToAccountantAPIModel `request:"mediaType=application/json"`
	SendInvoiceToAccountantAPIModel1 *shared.SendInvoiceToAccountantAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	SendInvoiceToAccountantAPIModel2 *shared.SendInvoiceToAccountantAPIModel `request:"mediaType=text/json"`
	TextHTML                         []byte                                  `request:"mediaType=text/html"`
	TextXML                          []byte                                  `request:"mediaType=text/xml"`
}

type InvoiceAPISendToAccountantRequest struct {
	Headers InvoiceAPISendToAccountantHeaders
	Request InvoiceAPISendToAccountantRequests
}

type InvoiceAPISendToAccountantResponse struct {
	Body                                                     []byte
	ContentType                                              string
	InvoiceAPISendToAccountant200ApplicationJSONInt32Integer *int32
	InvoiceAPISendToAccountant200TextJSONInt32Integer        *int32
	StatusCode                                               int64
}
