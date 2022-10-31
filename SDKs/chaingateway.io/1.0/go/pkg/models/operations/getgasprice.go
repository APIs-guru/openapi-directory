package operations

import (
"openapi/pkg/models/shared")

type GetGasPriceHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    ContentType string `header:"style=simple,explode=false,name=Content-Type"`
    
}

type GetGasPriceRequest struct {
    Headers GetGasPriceHeaders 
    
}

type GetGasPriceResponse struct {
    ContentType string 
    StatusCode int64 
    GetGasPrice *shared.GetGasPrice 
    
}

