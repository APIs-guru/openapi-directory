package shared

type ParameterRange struct {
	CategoricalParameterRangeSpecification *CategoricalParameterRangeSpecification `json:"CategoricalParameterRangeSpecification,omitempty"`
	ContinuousParameterRangeSpecification  *ContinuousParameterRangeSpecification  `json:"ContinuousParameterRangeSpecification,omitempty"`
	IntegerParameterRangeSpecification     *IntegerParameterRangeSpecification     `json:"IntegerParameterRangeSpecification,omitempty"`
}
