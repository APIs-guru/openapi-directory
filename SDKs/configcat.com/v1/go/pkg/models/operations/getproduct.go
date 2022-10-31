package operations

import (
"openapi/pkg/models/shared")

type GetProductPathParams struct {
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    
}

type GetProductRequest struct {
    PathParams GetProductPathParams 
    
}

type GetProductResponse struct {
    ContentType string 
    ProductModel *shared.ProductModel 
    ProductModelHaljson *shared.ProductModelHaljson 
    StatusCode int64 
    
}

