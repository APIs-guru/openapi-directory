package shared

// DeliveryCost
// This type contains a breakdown of all costs associated with the fulfillment of a line item.
type DeliveryCost struct {
	ImportCharges             *Amount `json:"importCharges,omitempty"`
	ShippingCost              *Amount `json:"shippingCost,omitempty"`
	ShippingIntermediationFee *Amount `json:"shippingIntermediationFee,omitempty"`
}
