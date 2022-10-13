package shared

type DescribeWorkspaceDirectoriesResult struct {
	Directories []WorkspaceDirectory `json:"Directories"`
	NextToken   *string              `json:"NextToken"`
}
