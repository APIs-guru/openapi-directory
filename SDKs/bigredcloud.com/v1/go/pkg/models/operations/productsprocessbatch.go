package operations

import (
"openapi/pkg/models/shared")

type ProductsProcessBatchRequest struct {
    Request []shared.BatchItemProductDto `request:"mediaType=application/json"`
    
}

type ProductsProcessBatchResponse struct {
    ContentType string 
    ProductsProcessBatch200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

