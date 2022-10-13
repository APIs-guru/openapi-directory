package shared

type ListTablesRequest struct {
	DatabaseName *string `json:"DatabaseName"`
	MaxResults   *int64  `json:"MaxResults"`
	NextToken    *string `json:"NextToken"`
}
