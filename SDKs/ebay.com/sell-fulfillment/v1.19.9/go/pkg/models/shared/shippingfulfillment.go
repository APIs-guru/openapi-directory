package shared



type ShippingFulfillment struct {
    FulfillmentID *string `json:"fulfillmentId,omitempty"`
    LineItems []LineItemReference `json:"lineItems,omitempty"`
    ShipmentTrackingNumber *string `json:"shipmentTrackingNumber,omitempty"`
    ShippedDate *string `json:"shippedDate,omitempty"`
    ShippingCarrierCode *string `json:"shippingCarrierCode,omitempty"`
    
}

