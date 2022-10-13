package shared

type ParameterRange struct {
	CategoricalParameterRangeSpecification *CategoricalParameterRangeSpecification `json:"CategoricalParameterRangeSpecification"`
	ContinuousParameterRangeSpecification  *ContinuousParameterRangeSpecification  `json:"ContinuousParameterRangeSpecification"`
	IntegerParameterRangeSpecification     *IntegerParameterRangeSpecification     `json:"IntegerParameterRangeSpecification"`
}
