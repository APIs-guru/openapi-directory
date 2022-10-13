package shared

type DescribeWorkspaceDirectoriesRequest struct {
	DirectoryIds []string `json:"DirectoryIds"`
	Limit        *int64   `json:"Limit"`
	NextToken    *string  `json:"NextToken"`
}
