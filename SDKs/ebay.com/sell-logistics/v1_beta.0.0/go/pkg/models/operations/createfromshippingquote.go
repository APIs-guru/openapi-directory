package operations

import (
"openapi/pkg/models/shared")

type CreateFromShippingQuoteSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type CreateFromShippingQuoteRequest struct {
    Request shared.CreateShipmentFromQuoteRequest `request:"mediaType=application/json"`
    Security CreateFromShippingQuoteSecurity 
    
}

type CreateFromShippingQuoteResponse struct {
    ContentType string 
    Shipment *shared.Shipment 
    StatusCode int64 
    
}

