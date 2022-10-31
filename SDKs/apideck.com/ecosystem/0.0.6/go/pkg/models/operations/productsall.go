package operations

import (
"openapi/pkg/models/shared")

type ProductsAllPathParams struct {
    EcosystemID string `pathParam:"style=simple,explode=false,name=ecosystem_id"`
    
}

type ProductsAllRequest struct {
    PathParams ProductsAllPathParams 
    
}

type ProductsAllResponse struct {
    ContentType string 
    GetProductsResponse *shared.GetProductsResponse 
    StatusCode int64 
    
}

