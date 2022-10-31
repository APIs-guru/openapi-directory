package operations

import (
"openapi/pkg/models/shared")

type GetV1PaymentsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetV1PaymentsIDRequest struct {
    PathParams GetV1PaymentsIDPathParams 
    
}

type GetV1PaymentsIDResponse struct {
    ContentType string 
    PaymentDto *shared.PaymentDto 
    StatusCode int64 
    
}

