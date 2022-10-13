package shared

type DeliveryCost struct {
	ImportCharges             *Amount `json:"importCharges"`
	ShippingCost              *Amount `json:"shippingCost"`
	ShippingIntermediationFee *Amount `json:"shippingIntermediationFee"`
}
