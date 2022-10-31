package operations

import (
"openapi/pkg/models/shared")

type SalesCreditNotesPostRequest struct {
    Request shared.SalesInvoiceCreditNoteDto `request:"mediaType=application/json"`
    
}

type SalesCreditNotesPostResponse struct {
    ContentType string 
    SalesCreditNotesPost200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

