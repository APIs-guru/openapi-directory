package shared

// LineItemFulfillmentInstructions
// This type contains the specifications for processing the fulfillment of a line item, including the handling window and the delivery window. These fields provide guidance for eBay Guaranteed Delivery as well as for non-guaranteed delivery.
type LineItemFulfillmentInstructions struct {
	GuaranteedDelivery       *bool   `json:"guaranteedDelivery,omitempty"`
	MaxEstimatedDeliveryDate *string `json:"maxEstimatedDeliveryDate,omitempty"`
	MinEstimatedDeliveryDate *string `json:"minEstimatedDeliveryDate,omitempty"`
	ShipByDate               *string `json:"shipByDate,omitempty"`
}
