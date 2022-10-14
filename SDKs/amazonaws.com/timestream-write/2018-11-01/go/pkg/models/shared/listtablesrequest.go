package shared

type ListTablesRequest struct {
	DatabaseName *string `json:"DatabaseName,omitempty"`
	MaxResults   *int64  `json:"MaxResults,omitempty"`
	NextToken    *string `json:"NextToken,omitempty"`
}
