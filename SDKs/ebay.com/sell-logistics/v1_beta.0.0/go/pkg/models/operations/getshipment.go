package operations

import (
	"openapi/pkg/models/shared"
)

type GetShipmentPathParams struct {
	ShipmentID string `pathParam:"style=simple,explode=false,name=shipmentId"`
}

type GetShipmentSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetShipmentRequest struct {
	PathParams GetShipmentPathParams
	Security   GetShipmentSecurity
}

type GetShipmentResponse struct {
	ContentType string
	Shipment    *shared.Shipment
	StatusCode  int64
}
