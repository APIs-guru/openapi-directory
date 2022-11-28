package shared

// HpoConfig
// Describes the properties for hyperparameter optimization (HPO).
type HpoConfig struct {
	AlgorithmHyperParameterRanges *HyperParameterRanges `json:"algorithmHyperParameterRanges,omitempty"`
	HpoObjective                  *HpoObjective         `json:"hpoObjective,omitempty"`
	HpoResourceConfig             *HpoResourceConfig    `json:"hpoResourceConfig,omitempty"`
}
