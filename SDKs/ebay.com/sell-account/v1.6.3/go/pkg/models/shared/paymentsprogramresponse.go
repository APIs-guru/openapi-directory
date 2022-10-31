package shared

type PaymentsProgramResponse struct {
	MarketplaceID        *string `json:"marketplaceId,omitempty"`
	PaymentsProgramType  *string `json:"paymentsProgramType,omitempty"`
	Status               *string `json:"status,omitempty"`
	WasPreviouslyOptedIn *bool   `json:"wasPreviouslyOptedIn,omitempty"`
}
