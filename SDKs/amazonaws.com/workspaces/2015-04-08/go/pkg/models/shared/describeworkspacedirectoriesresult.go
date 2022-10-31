package shared



type DescribeWorkspaceDirectoriesResult struct {
    Directories []WorkspaceDirectory `json:"Directories,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

