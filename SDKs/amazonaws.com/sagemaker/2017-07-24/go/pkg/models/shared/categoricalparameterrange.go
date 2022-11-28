package shared

// CategoricalParameterRange
// A list of categorical hyperparameters to tune.
type CategoricalParameterRange struct {
	Name   string   `json:"Name"`
	Values []string `json:"Values"`
}
