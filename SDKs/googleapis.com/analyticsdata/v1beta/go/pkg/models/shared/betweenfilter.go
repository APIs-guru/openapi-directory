package shared

type BetweenFilter struct {
	FromValue *NumericValue `json:"fromValue"`
	ToValue   *NumericValue `json:"toValue"`
}
