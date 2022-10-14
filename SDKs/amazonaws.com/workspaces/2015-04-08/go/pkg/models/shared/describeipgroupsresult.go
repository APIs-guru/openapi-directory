package shared

type DescribeIPGroupsResult struct {
	NextToken *string             `json:"NextToken,omitempty"`
	Result    []WorkspacesIPGroup `json:"Result,omitempty"`
}
