package shared

// BetweenFilter
// To express that the result needs to be between two numbers (inclusive).
type BetweenFilter struct {
	FromValue *NumericValue `json:"fromValue,omitempty"`
	ToValue   *NumericValue `json:"toValue,omitempty"`
}
