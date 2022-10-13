package shared

type CategoricalHyperParameterRange struct {
	Name   *string  `json:"name"`
	Values []string `json:"values"`
}
