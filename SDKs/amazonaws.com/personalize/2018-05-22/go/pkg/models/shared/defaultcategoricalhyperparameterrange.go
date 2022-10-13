package shared

type DefaultCategoricalHyperParameterRange struct {
	IsTunable *bool    `json:"isTunable"`
	Name      *string  `json:"name"`
	Values    []string `json:"values"`
}
