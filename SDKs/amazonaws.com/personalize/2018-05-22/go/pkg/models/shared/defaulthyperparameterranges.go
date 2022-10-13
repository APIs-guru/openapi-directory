package shared

type DefaultHyperParameterRanges struct {
	CategoricalHyperParameterRanges []DefaultCategoricalHyperParameterRange `json:"categoricalHyperParameterRanges"`
	ContinuousHyperParameterRanges  []DefaultContinuousHyperParameterRange  `json:"continuousHyperParameterRanges"`
	IntegerHyperParameterRanges     []DefaultIntegerHyperParameterRange     `json:"integerHyperParameterRanges"`
}
