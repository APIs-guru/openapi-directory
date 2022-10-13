package shared

type DescribeIPGroupsResult struct {
	NextToken *string             `json:"NextToken"`
	Result    []WorkspacesIPGroup `json:"Result"`
}
