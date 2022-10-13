package operations

import (
	"openapi/pkg/models/shared"
)

type EmailSendSalesInvoiceRequest struct {
	Request shared.SalesInvoiceEmailInfoDto `request:"mediaType=application/json"`
}

type EmailSendSalesInvoiceResponse struct {
	ContentType                                   string
	EmailSendSalesInvoice200ApplicationJSONObject map[string]interface{}
	StatusCode                                    int64
}
