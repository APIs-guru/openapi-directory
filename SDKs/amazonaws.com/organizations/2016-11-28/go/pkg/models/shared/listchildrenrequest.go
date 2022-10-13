package shared

type ListChildrenRequest struct {
	ChildType  ChildTypeEnum `json:"ChildType"`
	MaxResults *int64        `json:"MaxResults"`
	NextToken  *string       `json:"NextToken"`
	ParentID   string        `json:"ParentId"`
}
