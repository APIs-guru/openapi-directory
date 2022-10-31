package shared



type DeliveryCost struct {
    ImportCharges *Amount `json:"importCharges,omitempty"`
    ShippingCost *Amount `json:"shippingCost,omitempty"`
    ShippingIntermediationFee *Amount `json:"shippingIntermediationFee,omitempty"`
    
}

