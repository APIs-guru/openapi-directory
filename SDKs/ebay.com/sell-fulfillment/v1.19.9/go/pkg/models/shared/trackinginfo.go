package shared

type TrackingInfo struct {
	ShipmentTrackingNumber *string `json:"shipmentTrackingNumber,omitempty"`
	ShippingCarrierCode    *string `json:"shippingCarrierCode,omitempty"`
}
