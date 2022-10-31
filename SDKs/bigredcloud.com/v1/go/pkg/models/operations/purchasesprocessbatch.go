package operations

import (
"openapi/pkg/models/shared")

type PurchasesProcessBatchRequest struct {
    Request []shared.BatchItemPurchaseDto `request:"mediaType=application/json"`
    
}

type PurchasesProcessBatchResponse struct {
    ContentType string 
    PurchasesProcessBatch200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

