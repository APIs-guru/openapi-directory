package shared

type ListChildrenRequest struct {
	ChildType  ChildTypeEnum `json:"ChildType"`
	MaxResults *int64        `json:"MaxResults,omitempty"`
	NextToken  *string       `json:"NextToken,omitempty"`
	ParentID   string        `json:"ParentId"`
}
