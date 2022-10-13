package operations

import (
	"openapi/pkg/models/shared"
)

type SalesInvoicesProcessBatchRequest struct {
	Request []shared.BatchItemSalesInvoiceCreditNoteDto `request:"mediaType=application/json"`
}

type SalesInvoicesProcessBatchResponse struct {
	ContentType                                       string
	SalesInvoicesProcessBatch200ApplicationJSONObject map[string]interface{}
	StatusCode                                        int64
}
