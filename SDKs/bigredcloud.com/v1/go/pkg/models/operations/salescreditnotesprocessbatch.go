package operations

import (
"openapi/pkg/models/shared")

type SalesCreditNotesProcessBatchRequest struct {
    Request []shared.BatchItemSalesInvoiceCreditNoteDto `request:"mediaType=application/json"`
    
}

type SalesCreditNotesProcessBatchResponse struct {
    ContentType string 
    SalesCreditNotesProcessBatch200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

