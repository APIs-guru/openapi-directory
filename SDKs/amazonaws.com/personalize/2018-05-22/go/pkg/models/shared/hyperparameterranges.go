package shared

type HyperParameterRanges struct {
	CategoricalHyperParameterRanges []CategoricalHyperParameterRange `json:"categoricalHyperParameterRanges,omitempty"`
	ContinuousHyperParameterRanges  []ContinuousHyperParameterRange  `json:"continuousHyperParameterRanges,omitempty"`
	IntegerHyperParameterRanges     []IntegerHyperParameterRange     `json:"integerHyperParameterRanges,omitempty"`
}
