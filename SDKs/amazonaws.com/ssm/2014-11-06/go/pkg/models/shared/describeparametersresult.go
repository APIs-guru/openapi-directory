package shared

type DescribeParametersResult struct {
	NextToken  *string             `json:"NextToken"`
	Parameters []ParameterMetadata `json:"Parameters"`
}
