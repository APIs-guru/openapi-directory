package operations

import (
"openapi/pkg/models/shared")

type ProductsOnePathParams struct {
    EcosystemID string `pathParam:"style=simple,explode=false,name=ecosystem_id"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ProductsOneRequest struct {
    PathParams ProductsOnePathParams 
    
}

type ProductsOneResponse struct {
    ContentType string 
    GetProductResponse *shared.GetProductResponse 
    StatusCode int64 
    
}

