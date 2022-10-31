package operations

import (
"openapi/pkg/models/shared")

type QuoteProcessBatchRequest struct {
    Request []shared.BatchItemQuoteDto `request:"mediaType=application/json"`
    
}

type QuoteProcessBatchResponse struct {
    ContentType string 
    QuoteProcessBatch200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

