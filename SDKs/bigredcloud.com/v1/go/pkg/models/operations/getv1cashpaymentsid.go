package operations

import (
"openapi/pkg/models/shared")

type GetV1CashPaymentsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetV1CashPaymentsIDRequest struct {
    PathParams GetV1CashPaymentsIDPathParams 
    
}

type GetV1CashPaymentsIDResponse struct {
    CashPaymentDto *shared.CashPaymentDto 
    ContentType string 
    StatusCode int64 
    
}

