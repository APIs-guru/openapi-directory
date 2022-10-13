package shared

type HyperParameterRanges struct {
	CategoricalHyperParameterRanges []CategoricalHyperParameterRange `json:"categoricalHyperParameterRanges"`
	ContinuousHyperParameterRanges  []ContinuousHyperParameterRange  `json:"continuousHyperParameterRanges"`
	IntegerHyperParameterRanges     []IntegerHyperParameterRange     `json:"integerHyperParameterRanges"`
}
