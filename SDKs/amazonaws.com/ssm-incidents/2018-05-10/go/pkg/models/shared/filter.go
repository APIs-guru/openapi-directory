package shared

// Filter
// Filter the selection by using a condition.
type Filter struct {
	Condition Condition `json:"condition"`
	Key       string    `json:"key"`
}
