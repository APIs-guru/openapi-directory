package shared

// ParameterRange
// Defines the possible values for categorical, continuous, and integer hyperparameters to be used by an algorithm.
type ParameterRange struct {
	CategoricalParameterRangeSpecification *CategoricalParameterRangeSpecification `json:"CategoricalParameterRangeSpecification,omitempty"`
	ContinuousParameterRangeSpecification  *ContinuousParameterRangeSpecification  `json:"ContinuousParameterRangeSpecification,omitempty"`
	IntegerParameterRangeSpecification     *IntegerParameterRangeSpecification     `json:"IntegerParameterRangeSpecification,omitempty"`
}
