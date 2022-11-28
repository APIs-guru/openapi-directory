package shared

// Amount
// A complex type that describes the value of a monetary amount as represented by a global currency.
type Amount struct {
	Currency *string `json:"currency,omitempty"`
	Value    *string `json:"value,omitempty"`
}
