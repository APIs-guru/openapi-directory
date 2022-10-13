package shared

type ListPageReceiptsRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	PageID     string  `json:"PageId"`
}
