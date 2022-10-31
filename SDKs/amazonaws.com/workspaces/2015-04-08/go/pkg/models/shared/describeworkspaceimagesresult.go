package shared

type DescribeWorkspaceImagesResult struct {
	Images    []WorkspaceImage `json:"Images,omitempty"`
	NextToken *string          `json:"NextToken,omitempty"`
}
