package shared

// DefaultIntegerHyperParameterRange
// Provides the name and default range of a integer-valued hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
type DefaultIntegerHyperParameterRange struct {
	IsTunable *bool   `json:"isTunable,omitempty"`
	MaxValue  *int64  `json:"maxValue,omitempty"`
	MinValue  *int64  `json:"minValue,omitempty"`
	Name      *string `json:"name,omitempty"`
}
