package shared

type HpoConfig struct {
	AlgorithmHyperParameterRanges *HyperParameterRanges `json:"algorithmHyperParameterRanges"`
	HpoObjective                  *HpoObjective         `json:"hpoObjective"`
	HpoResourceConfig             *HpoResourceConfig    `json:"hpoResourceConfig"`
}
