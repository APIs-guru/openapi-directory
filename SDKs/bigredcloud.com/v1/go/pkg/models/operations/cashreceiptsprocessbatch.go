package operations

import (
"openapi/pkg/models/shared")

type CashReceiptsProcessBatchRequest struct {
    Request []shared.BatchItemCashReceiptDto `request:"mediaType=application/json"`
    
}

type CashReceiptsProcessBatchResponse struct {
    CashReceiptsProcessBatch200ApplicationJSONObject map[string]interface{} 
    ContentType string 
    StatusCode int64 
    
}

