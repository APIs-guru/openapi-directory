package operations

import (
"openapi/pkg/models/shared")

type GetShippingQuotePathParams struct {
    ShippingQuoteID string `pathParam:"style=simple,explode=false,name=shippingQuoteId"`
    
}

type GetShippingQuoteSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetShippingQuoteRequest struct {
    PathParams GetShippingQuotePathParams 
    Security GetShippingQuoteSecurity 
    
}

type GetShippingQuoteResponse struct {
    ContentType string 
    ShippingQuote *shared.ShippingQuote 
    StatusCode int64 
    
}

