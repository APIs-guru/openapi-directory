package operations

import (
"openapi/pkg/models/shared")

type SalesCreditNotesPutPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type SalesCreditNotesPutRequest struct {
    PathParams SalesCreditNotesPutPathParams 
    Request shared.SalesInvoiceCreditNoteDto `request:"mediaType=application/json"`
    
}

type SalesCreditNotesPutResponse struct {
    ContentType string 
    SalesCreditNotesPut200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

