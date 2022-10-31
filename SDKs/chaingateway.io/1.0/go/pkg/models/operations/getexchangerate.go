package operations

import (
"openapi/pkg/models/shared")

type GetExchangeRateHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetExchangeRateRequest struct {
    Headers GetExchangeRateHeaders 
    Request shared.GetExchangeRateRequest `request:"mediaType=application/json"`
    
}

type GetExchangeRateResponse struct {
    ContentType string 
    StatusCode int64 
    GetExchangeRate *shared.GetExchangeRate 
    
}

