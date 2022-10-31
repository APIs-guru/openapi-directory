package operations

import (
"openapi/pkg/models/shared")

type SalesInvoicesPostRequest struct {
    Request shared.SalesInvoiceCreditNoteDto `request:"mediaType=application/json"`
    
}

type SalesInvoicesPostResponse struct {
    ContentType string 
    SalesInvoicesPost200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

