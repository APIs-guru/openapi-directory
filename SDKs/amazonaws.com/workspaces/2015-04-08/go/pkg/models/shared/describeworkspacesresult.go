package shared

type DescribeWorkspacesResult struct {
	NextToken  *string     `json:"NextToken"`
	Workspaces []Workspace `json:"Workspaces"`
}
