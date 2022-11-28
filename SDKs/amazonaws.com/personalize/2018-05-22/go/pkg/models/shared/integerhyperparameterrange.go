package shared

// IntegerHyperParameterRange
// Provides the name and range of an integer-valued hyperparameter.
type IntegerHyperParameterRange struct {
	MaxValue *int64  `json:"maxValue,omitempty"`
	MinValue *int64  `json:"minValue,omitempty"`
	Name     *string `json:"name,omitempty"`
}
