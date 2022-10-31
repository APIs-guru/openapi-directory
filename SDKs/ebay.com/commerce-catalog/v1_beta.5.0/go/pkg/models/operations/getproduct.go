package operations

import (
"openapi/pkg/models/shared")

type GetProductPathParams struct {
    Epid string `pathParam:"style=simple,explode=false,name=epid"`
    
}

type GetProductSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetProductRequest struct {
    PathParams GetProductPathParams 
    Security GetProductSecurity 
    
}

type GetProductResponse struct {
    ContentType string 
    Product *shared.Product 
    StatusCode int64 
    
}

