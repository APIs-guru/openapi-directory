package operations

import (
"openapi/pkg/models/shared")

type GetV1ProductsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetV1ProductsIDRequest struct {
    PathParams GetV1ProductsIDPathParams 
    
}

type GetV1ProductsIDResponse struct {
    ContentType string 
    ProductDto *shared.ProductDto 
    StatusCode int64 
    
}

