package shared

type ShippingFulfillmentDetails struct {
	LineItems           []LineItemReference `json:"lineItems"`
	ShippedDate         *string             `json:"shippedDate"`
	ShippingCarrierCode *string             `json:"shippingCarrierCode"`
	TrackingNumber      *string             `json:"trackingNumber"`
}
