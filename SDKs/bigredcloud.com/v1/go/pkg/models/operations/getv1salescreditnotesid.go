package operations

import (
"openapi/pkg/models/shared")

type GetV1SalesCreditNotesIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetV1SalesCreditNotesIDRequest struct {
    PathParams GetV1SalesCreditNotesIDPathParams 
    
}

type GetV1SalesCreditNotesIDResponse struct {
    ContentType string 
    SalesInvoiceCreditNoteDto *shared.SalesInvoiceCreditNoteDto 
    StatusCode int64 
    
}

