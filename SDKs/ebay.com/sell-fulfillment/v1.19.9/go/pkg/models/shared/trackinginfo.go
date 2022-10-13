package shared

type TrackingInfo struct {
	ShipmentTrackingNumber *string `json:"shipmentTrackingNumber"`
	ShippingCarrierCode    *string `json:"shippingCarrierCode"`
}
