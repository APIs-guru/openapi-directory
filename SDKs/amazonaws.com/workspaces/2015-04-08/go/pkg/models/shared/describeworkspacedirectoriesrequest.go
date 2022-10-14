package shared

type DescribeWorkspaceDirectoriesRequest struct {
	DirectoryIds []string `json:"DirectoryIds,omitempty"`
	Limit        *int64   `json:"Limit,omitempty"`
	NextToken    *string  `json:"NextToken,omitempty"`
}
