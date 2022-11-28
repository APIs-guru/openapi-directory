package shared

// InteractionLimit
// Limit interactions to a specific type of user for a specified duration
type InteractionLimit struct {
	Expiry *InteractionExpiryEnum `json:"expiry,omitempty"`
	Limit  InteractionGroupEnum   `json:"limit"`
}
