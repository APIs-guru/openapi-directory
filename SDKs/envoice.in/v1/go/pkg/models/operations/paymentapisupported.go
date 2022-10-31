package operations

import (
"openapi/pkg/models/shared")

type PaymentAPISupportedHeaders struct {
    XAuthKey string `header:"style=simple,explode=false,name=x-auth-key"`
    XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
    
}

type PaymentAPISupportedRequest struct {
    Headers PaymentAPISupportedHeaders 
    
}

type PaymentAPISupportedResponse struct {
    Body []byte 
    ContentType string 
    PaymentGatewayDetailsAPIModels []shared.PaymentGatewayDetailsAPIModel 
    StatusCode int64 
    
}

