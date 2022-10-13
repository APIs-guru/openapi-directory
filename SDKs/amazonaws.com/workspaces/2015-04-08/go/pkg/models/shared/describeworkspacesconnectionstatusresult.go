package shared

type DescribeWorkspacesConnectionStatusResult struct {
	NextToken                  *string                     `json:"NextToken"`
	WorkspacesConnectionStatus []WorkspaceConnectionStatus `json:"WorkspacesConnectionStatus"`
}
