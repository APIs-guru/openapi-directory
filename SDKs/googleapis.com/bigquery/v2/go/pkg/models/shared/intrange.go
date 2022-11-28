package shared

// IntRange
// Range of an int hyperparameter.
type IntRange struct {
	Max *string `json:"max,omitempty"`
	Min *string `json:"min,omitempty"`
}
