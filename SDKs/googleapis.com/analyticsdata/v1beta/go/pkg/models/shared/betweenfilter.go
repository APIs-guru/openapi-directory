package shared

type BetweenFilter struct {
	FromValue *NumericValue `json:"fromValue,omitempty"`
	ToValue   *NumericValue `json:"toValue,omitempty"`
}
