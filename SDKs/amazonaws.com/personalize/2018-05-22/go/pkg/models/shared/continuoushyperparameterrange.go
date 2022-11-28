package shared

// ContinuousHyperParameterRange
// Provides the name and range of a continuous hyperparameter.
type ContinuousHyperParameterRange struct {
	MaxValue *float64 `json:"maxValue,omitempty"`
	MinValue *float64 `json:"minValue,omitempty"`
	Name     *string  `json:"name,omitempty"`
}
