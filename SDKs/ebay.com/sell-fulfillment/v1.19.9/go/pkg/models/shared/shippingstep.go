package shared

type ShippingStep struct {
	ShipTo              *ExtendedContact `json:"shipTo"`
	ShipToReferenceID   *string          `json:"shipToReferenceId"`
	ShippingCarrierCode *string          `json:"shippingCarrierCode"`
	ShippingServiceCode *string          `json:"shippingServiceCode"`
}
