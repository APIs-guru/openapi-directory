package shared

type InteractionLimit struct {
	Expiry *InteractionExpiryEnum `json:"expiry"`
	Limit  InteractionGroupEnum   `json:"limit"`
}
