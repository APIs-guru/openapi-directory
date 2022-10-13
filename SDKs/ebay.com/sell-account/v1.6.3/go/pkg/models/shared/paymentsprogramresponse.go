package shared

type PaymentsProgramResponse struct {
	MarketplaceID        *string `json:"marketplaceId"`
	PaymentsProgramType  *string `json:"paymentsProgramType"`
	Status               *string `json:"status"`
	WasPreviouslyOptedIn *bool   `json:"wasPreviouslyOptedIn"`
}
