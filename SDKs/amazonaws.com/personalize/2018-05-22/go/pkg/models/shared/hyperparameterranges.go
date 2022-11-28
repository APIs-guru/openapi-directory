package shared

// HyperParameterRanges
// Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued.
type HyperParameterRanges struct {
	CategoricalHyperParameterRanges []CategoricalHyperParameterRange `json:"categoricalHyperParameterRanges,omitempty"`
	ContinuousHyperParameterRanges  []ContinuousHyperParameterRange  `json:"continuousHyperParameterRanges,omitempty"`
	IntegerHyperParameterRanges     []IntegerHyperParameterRange     `json:"integerHyperParameterRanges,omitempty"`
}
