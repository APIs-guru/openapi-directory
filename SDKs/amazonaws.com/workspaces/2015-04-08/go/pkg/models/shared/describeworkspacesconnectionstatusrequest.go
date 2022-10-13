package shared

type DescribeWorkspacesConnectionStatusRequest struct {
	NextToken    *string  `json:"NextToken"`
	WorkspaceIds []string `json:"WorkspaceIds"`
}
