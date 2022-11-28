package shared

// ShippingFulfillment
// This type contains the complete details of an existing fulfillment for an order.
type ShippingFulfillment struct {
	FulfillmentID          *string             `json:"fulfillmentId,omitempty"`
	LineItems              []LineItemReference `json:"lineItems,omitempty"`
	ShipmentTrackingNumber *string             `json:"shipmentTrackingNumber,omitempty"`
	ShippedDate            *string             `json:"shippedDate,omitempty"`
	ShippingCarrierCode    *string             `json:"shippingCarrierCode,omitempty"`
}
