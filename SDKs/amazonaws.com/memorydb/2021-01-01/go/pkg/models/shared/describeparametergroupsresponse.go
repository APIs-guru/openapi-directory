package shared

type DescribeParameterGroupsResponse struct {
	NextToken       *string          `json:"NextToken"`
	ParameterGroups []ParameterGroup `json:"ParameterGroups"`
}
