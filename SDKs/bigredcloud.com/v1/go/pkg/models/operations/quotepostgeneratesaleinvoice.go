package operations

import (
	"openapi/pkg/models/shared"
)

type QuotePostGenerateSaleInvoiceRequest struct {
	Request shared.QuoteGeneratingInvoiceDto `request:"mediaType=application/json"`
}

type QuotePostGenerateSaleInvoiceResponse struct {
	ContentType                                          string
	QuotePostGenerateSaleInvoice200ApplicationJSONObject map[string]interface{}
	StatusCode                                           int64
}
