package shared

type CategoricalHyperParameterRange struct {
	Name   *string  `json:"name,omitempty"`
	Values []string `json:"values,omitempty"`
}
