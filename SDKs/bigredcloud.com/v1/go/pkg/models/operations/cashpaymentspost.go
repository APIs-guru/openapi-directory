package operations

import (
"openapi/pkg/models/shared")

type CashPaymentsPostRequest struct {
    Request shared.CashPaymentDto `request:"mediaType=application/json"`
    
}

type CashPaymentsPostResponse struct {
    CashPaymentsPost200ApplicationJSONObject map[string]interface{} 
    ContentType string 
    StatusCode int64 
    
}

