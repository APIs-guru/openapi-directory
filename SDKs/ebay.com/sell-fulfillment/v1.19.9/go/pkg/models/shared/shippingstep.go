package shared

// ShippingStep
// This type contains shipping information for a fulfillment, including the shipping carrier, the shipping service option, the shipment destination, and the Global Shipping Program reference ID.
type ShippingStep struct {
	ShipTo              *ExtendedContact `json:"shipTo,omitempty"`
	ShipToReferenceID   *string          `json:"shipToReferenceId,omitempty"`
	ShippingCarrierCode *string          `json:"shippingCarrierCode,omitempty"`
	ShippingServiceCode *string          `json:"shippingServiceCode,omitempty"`
}
