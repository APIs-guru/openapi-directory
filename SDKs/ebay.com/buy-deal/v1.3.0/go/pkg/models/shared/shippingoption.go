package shared



type ShippingOption struct {
    ShippingCost *Amount `json:"shippingCost,omitempty"`
    ShippingCostType *string `json:"shippingCostType,omitempty"`
    
}

