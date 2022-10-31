package operations

import (
"openapi/pkg/models/shared")

type GetV1CashReceiptsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetV1CashReceiptsIDRequest struct {
    PathParams GetV1CashReceiptsIDPathParams 
    
}

type GetV1CashReceiptsIDResponse struct {
    CashReceiptDto *shared.CashReceiptDto 
    ContentType string 
    StatusCode int64 
    
}

