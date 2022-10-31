package operations

import (
"openapi/pkg/models/shared")

type SuppliersPostRequest struct {
    Request shared.SupplierDto `request:"mediaType=application/json"`
    
}

type SuppliersPostResponse struct {
    ContentType string 
    StatusCode int64 
    SuppliersPost200ApplicationJSONObject map[string]interface{} 
    
}

