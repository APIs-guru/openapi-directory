package shared

// SimpleAmount
// This type defines the monetary value of the payment dispute, and the currency used.
type SimpleAmount struct {
	Currency *string `json:"currency,omitempty"`
	Value    *string `json:"value,omitempty"`
}
