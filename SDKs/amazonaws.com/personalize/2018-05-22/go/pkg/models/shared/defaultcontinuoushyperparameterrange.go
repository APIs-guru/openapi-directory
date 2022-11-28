package shared

// DefaultContinuousHyperParameterRange
// Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
type DefaultContinuousHyperParameterRange struct {
	IsTunable *bool    `json:"isTunable,omitempty"`
	MaxValue  *float64 `json:"maxValue,omitempty"`
	MinValue  *float64 `json:"minValue,omitempty"`
	Name      *string  `json:"name,omitempty"`
}
