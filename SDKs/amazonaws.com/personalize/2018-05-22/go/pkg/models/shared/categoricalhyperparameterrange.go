package shared

// CategoricalHyperParameterRange
// Provides the name and range of a categorical hyperparameter.
type CategoricalHyperParameterRange struct {
	Name   *string  `json:"name,omitempty"`
	Values []string `json:"values,omitempty"`
}
