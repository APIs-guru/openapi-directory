package shared

type ParameterTypeEnum string

const (
	ParameterTypeEnumInteger     ParameterTypeEnum = "Integer"
	ParameterTypeEnumContinuous  ParameterTypeEnum = "Continuous"
	ParameterTypeEnumCategorical ParameterTypeEnum = "Categorical"
	ParameterTypeEnumFreeText    ParameterTypeEnum = "FreeText"
)
