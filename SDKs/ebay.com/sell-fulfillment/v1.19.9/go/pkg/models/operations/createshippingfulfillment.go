package operations

import (
"openapi/pkg/models/shared")

type CreateShippingFulfillmentPathParams struct {
    OrderID string `pathParam:"style=simple,explode=false,name=orderId"`
    
}

type CreateShippingFulfillmentSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type CreateShippingFulfillmentRequest struct {
    PathParams CreateShippingFulfillmentPathParams 
    Request shared.ShippingFulfillmentDetails `request:"mediaType=application/json"`
    Security CreateShippingFulfillmentSecurity 
    
}

type CreateShippingFulfillmentResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateShippingFulfillment201ApplicationJSONObject map[string]interface{} 
    
}

