package shared

// PaymentsProgramResponse
// The response object containing the sellers status with regards to the specified payment program.
type PaymentsProgramResponse struct {
	MarketplaceID        *string `json:"marketplaceId,omitempty"`
	PaymentsProgramType  *string `json:"paymentsProgramType,omitempty"`
	Status               *string `json:"status,omitempty"`
	WasPreviouslyOptedIn *bool   `json:"wasPreviouslyOptedIn,omitempty"`
}
