package operations

import (
"openapi/pkg/models/shared")

type SuppliersProcessBatchRequest struct {
    Request []shared.BatchItemSupplierDto `request:"mediaType=application/json"`
    
}

type SuppliersProcessBatchResponse struct {
    ContentType string 
    StatusCode int64 
    SuppliersProcessBatch200ApplicationJSONObject map[string]interface{} 
    
}

