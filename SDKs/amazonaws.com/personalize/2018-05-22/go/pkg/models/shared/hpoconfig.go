package shared

type HpoConfig struct {
	AlgorithmHyperParameterRanges *HyperParameterRanges `json:"algorithmHyperParameterRanges,omitempty"`
	HpoObjective                  *HpoObjective         `json:"hpoObjective,omitempty"`
	HpoResourceConfig             *HpoResourceConfig    `json:"hpoResourceConfig,omitempty"`
}
