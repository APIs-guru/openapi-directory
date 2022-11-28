package shared

// ShippingFulfillmentDetails
// This type contains the details for creating a fulfillment for an order.
type ShippingFulfillmentDetails struct {
	LineItems           []LineItemReference `json:"lineItems,omitempty"`
	ShippedDate         *string             `json:"shippedDate,omitempty"`
	ShippingCarrierCode *string             `json:"shippingCarrierCode,omitempty"`
	TrackingNumber      *string             `json:"trackingNumber,omitempty"`
}
