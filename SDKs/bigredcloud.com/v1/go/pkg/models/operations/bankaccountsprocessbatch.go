package operations

import (
"openapi/pkg/models/shared")

type BankAccountsProcessBatchRequest struct {
    Request []shared.BatchItemBankAccountDto `request:"mediaType=application/json"`
    
}

type BankAccountsProcessBatchResponse struct {
    BankAccountsProcessBatch200ApplicationJSONObject map[string]interface{} 
    ContentType string 
    StatusCode int64 
    
}

