package shared

type ListParentsRequest struct {
	ChildID    string  `json:"ChildId"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
