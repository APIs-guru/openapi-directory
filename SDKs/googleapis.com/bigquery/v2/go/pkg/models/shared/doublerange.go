package shared

// DoubleRange
// Range of a double hyperparameter.
type DoubleRange struct {
	Max *float64 `json:"max,omitempty"`
	Min *float64 `json:"min,omitempty"`
}
