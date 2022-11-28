package shared

// Amount
// The currency and value of the item.
type Amount struct {
	Currency *string `json:"currency,omitempty"`
	Value    *string `json:"value,omitempty"`
}
