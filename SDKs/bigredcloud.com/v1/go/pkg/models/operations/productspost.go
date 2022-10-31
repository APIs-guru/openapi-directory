package operations

import (
"openapi/pkg/models/shared")

type ProductsPostRequest struct {
    Request shared.ProductDto `request:"mediaType=application/json"`
    
}

type ProductsPostResponse struct {
    ContentType string 
    ProductsPost200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

