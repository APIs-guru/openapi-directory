package shared

type DescribeWorkspaceImagesResult struct {
	Images    []WorkspaceImage `json:"Images"`
	NextToken *string          `json:"NextToken"`
}
