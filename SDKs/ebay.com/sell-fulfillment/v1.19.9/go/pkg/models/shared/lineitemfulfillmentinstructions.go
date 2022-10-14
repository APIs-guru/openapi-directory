package shared

type LineItemFulfillmentInstructions struct {
	GuaranteedDelivery       *bool   `json:"guaranteedDelivery,omitempty"`
	MaxEstimatedDeliveryDate *string `json:"maxEstimatedDeliveryDate,omitempty"`
	MinEstimatedDeliveryDate *string `json:"minEstimatedDeliveryDate,omitempty"`
	ShipByDate               *string `json:"shipByDate,omitempty"`
}
