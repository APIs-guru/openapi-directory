package shared

type LineItemFulfillmentInstructions struct {
	GuaranteedDelivery       *bool   `json:"guaranteedDelivery"`
	MaxEstimatedDeliveryDate *string `json:"maxEstimatedDeliveryDate"`
	MinEstimatedDeliveryDate *string `json:"minEstimatedDeliveryDate"`
	ShipByDate               *string `json:"shipByDate"`
}
