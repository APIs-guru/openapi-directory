package operations

import (
"openapi/pkg/models/shared")

type CashReceiptsPostRequest struct {
    Request shared.CashReceiptDto `request:"mediaType=application/json"`
    
}

type CashReceiptsPostResponse struct {
    CashReceiptsPost200ApplicationJSONObject map[string]interface{} 
    ContentType string 
    StatusCode int64 
    
}

