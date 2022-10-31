package shared

type DefaultHyperParameterRanges struct {
	CategoricalHyperParameterRanges []DefaultCategoricalHyperParameterRange `json:"categoricalHyperParameterRanges,omitempty"`
	ContinuousHyperParameterRanges  []DefaultContinuousHyperParameterRange  `json:"continuousHyperParameterRanges,omitempty"`
	IntegerHyperParameterRanges     []DefaultIntegerHyperParameterRange     `json:"integerHyperParameterRanges,omitempty"`
}
