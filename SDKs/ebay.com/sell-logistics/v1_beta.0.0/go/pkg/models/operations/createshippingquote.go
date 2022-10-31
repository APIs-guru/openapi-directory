package operations

import (
"openapi/pkg/models/shared")

type CreateShippingQuoteSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type CreateShippingQuoteRequest struct {
    Request shared.ShippingQuoteRequest `request:"mediaType=application/json"`
    Security CreateShippingQuoteSecurity 
    
}

type CreateShippingQuoteResponse struct {
    ContentType string 
    ShippingQuote *shared.ShippingQuote 
    StatusCode int64 
    
}

