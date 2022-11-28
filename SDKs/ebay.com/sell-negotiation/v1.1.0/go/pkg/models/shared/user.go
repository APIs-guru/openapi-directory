package shared

// User
// This complex type identifies an eBay user.
type User struct {
	MaskedUsername *string `json:"maskedUsername,omitempty"`
}
