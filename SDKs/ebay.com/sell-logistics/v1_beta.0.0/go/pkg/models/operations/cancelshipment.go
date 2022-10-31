package operations

import (
"openapi/pkg/models/shared")

type CancelShipmentPathParams struct {
    ShipmentID string `pathParam:"style=simple,explode=false,name=shipmentId"`
    
}

type CancelShipmentSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type CancelShipmentRequest struct {
    PathParams CancelShipmentPathParams 
    Security CancelShipmentSecurity 
    
}

type CancelShipmentResponse struct {
    ContentType string 
    Shipment *shared.Shipment 
    StatusCode int64 
    
}

