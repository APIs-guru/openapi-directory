package shared

// Amount
// The type that defines the fields for the currency and a monetary amount.
type Amount struct {
	Currency *string `json:"currency,omitempty"`
	Value    *string `json:"value,omitempty"`
}
