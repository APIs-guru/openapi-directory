package shared

// DefaultHyperParameterRanges
// Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued.
type DefaultHyperParameterRanges struct {
	CategoricalHyperParameterRanges []DefaultCategoricalHyperParameterRange `json:"categoricalHyperParameterRanges,omitempty"`
	ContinuousHyperParameterRanges  []DefaultContinuousHyperParameterRange  `json:"continuousHyperParameterRanges,omitempty"`
	IntegerHyperParameterRanges     []DefaultIntegerHyperParameterRange     `json:"integerHyperParameterRanges,omitempty"`
}
