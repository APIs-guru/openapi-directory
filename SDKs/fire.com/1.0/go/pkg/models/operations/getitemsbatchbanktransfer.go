package operations

import (
"openapi/pkg/models/shared")

type GetItemsBatchBankTransferPathParams struct {
    BatchUUID string `pathParam:"style=simple,explode=false,name=batchUuid"`
    
}

type GetItemsBatchBankTransferQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetItemsBatchBankTransferRequest struct {
    PathParams GetItemsBatchBankTransferPathParams 
    QueryParams GetItemsBatchBankTransferQueryParams 
    
}

type GetItemsBatchBankTransferResponse struct {
    ContentType string 
    StatusCode int64 
    OnebatchesGetResponses200ContentApplication1jsonSchema *shared.OnebatchesGetResponses200ContentApplication1jsonSchema 
    
}

