package operations

import (
	"openapi/pkg/models/shared"
)

type InvoiceAPISendToClientHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type InvoiceAPISendToClientRequests struct {
	ApplicationXML               []byte                              `request:"mediaType=application/xml"`
	SendInvoiceToClientAPIModel  *shared.SendInvoiceToClientAPIModel `request:"mediaType=application/json"`
	SendInvoiceToClientAPIModel1 *shared.SendInvoiceToClientAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	SendInvoiceToClientAPIModel2 *shared.SendInvoiceToClientAPIModel `request:"mediaType=text/json"`
	TextHTML                     []byte                              `request:"mediaType=text/html"`
	TextXML                      []byte                              `request:"mediaType=text/xml"`
}

type InvoiceAPISendToClientRequest struct {
	Headers InvoiceAPISendToClientHeaders
	Request InvoiceAPISendToClientRequests
}

type InvoiceAPISendToClientResponse struct {
	Body                                                 []byte
	ContentType                                          string
	InvoiceAPISendToClient200ApplicationJSONInt32Integer *int32
	InvoiceAPISendToClient200TextJSONInt32Integer        *int32
	StatusCode                                           int64
}
