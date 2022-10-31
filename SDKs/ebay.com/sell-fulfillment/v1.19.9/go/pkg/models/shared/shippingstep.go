package shared



type ShippingStep struct {
    ShipTo *ExtendedContact `json:"shipTo,omitempty"`
    ShipToReferenceID *string `json:"shipToReferenceId,omitempty"`
    ShippingCarrierCode *string `json:"shippingCarrierCode,omitempty"`
    ShippingServiceCode *string `json:"shippingServiceCode,omitempty"`
    
}

