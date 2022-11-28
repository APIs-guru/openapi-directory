package shared

// TrackingInfo
// This type is used by the shipmentTracking array returned under the evidence container if the seller has provided shipment tracking information as evidence to support PROOF_OF_DELIVERY for an INR-related payment dispute.
type TrackingInfo struct {
	ShipmentTrackingNumber *string `json:"shipmentTrackingNumber,omitempty"`
	ShippingCarrierCode    *string `json:"shippingCarrierCode,omitempty"`
}
