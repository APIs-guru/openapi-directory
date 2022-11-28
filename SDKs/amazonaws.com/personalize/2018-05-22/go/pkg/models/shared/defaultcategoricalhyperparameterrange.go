package shared

// DefaultCategoricalHyperParameterRange
// Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
type DefaultCategoricalHyperParameterRange struct {
	IsTunable *bool    `json:"isTunable,omitempty"`
	Name      *string  `json:"name,omitempty"`
	Values    []string `json:"values,omitempty"`
}
