package shared

type ShippingFulfillment struct {
	FulfillmentID          *string             `json:"fulfillmentId"`
	LineItems              []LineItemReference `json:"lineItems"`
	ShipmentTrackingNumber *string             `json:"shipmentTrackingNumber"`
	ShippedDate            *string             `json:"shippedDate"`
	ShippingCarrierCode    *string             `json:"shippingCarrierCode"`
}
