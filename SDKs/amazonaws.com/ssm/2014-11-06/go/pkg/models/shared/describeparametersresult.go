package shared

type DescribeParametersResult struct {
	NextToken  *string             `json:"NextToken,omitempty"`
	Parameters []ParameterMetadata `json:"Parameters,omitempty"`
}
