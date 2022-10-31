package shared

type ListAccountsForParentRequest struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	ParentID   string  `json:"ParentId"`
}
