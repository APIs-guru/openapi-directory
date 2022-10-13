package shared

type ParameterStringFilter struct {
	Key    string   `json:"Key"`
	Option *string  `json:"Option"`
	Values []string `json:"Values"`
}
