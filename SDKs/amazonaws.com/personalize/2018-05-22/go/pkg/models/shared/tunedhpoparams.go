package shared

// TunedHpoParams
// If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model.
type TunedHpoParams struct {
	AlgorithmHyperParameters map[string]string `json:"algorithmHyperParameters,omitempty"`
}
