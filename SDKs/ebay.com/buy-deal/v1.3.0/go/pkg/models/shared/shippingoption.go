package shared

type ShippingOption struct {
	ShippingCost     *Amount `json:"shippingCost"`
	ShippingCostType *string `json:"shippingCostType"`
}
