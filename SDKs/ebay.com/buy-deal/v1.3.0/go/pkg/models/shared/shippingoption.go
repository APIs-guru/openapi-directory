package shared

// ShippingOption
// The details provided for the shipping provider, such as shipping cost and type.
type ShippingOption struct {
	ShippingCost     *Amount `json:"shippingCost,omitempty"`
	ShippingCostType *string `json:"shippingCostType,omitempty"`
}
