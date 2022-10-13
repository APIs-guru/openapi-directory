package shared

type DescribeInventoryDeletionsRequest struct {
	DeletionID *string `json:"DeletionId"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
