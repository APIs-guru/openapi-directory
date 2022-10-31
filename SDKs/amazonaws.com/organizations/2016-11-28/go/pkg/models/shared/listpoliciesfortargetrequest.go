package shared

type ListPoliciesForTargetRequest struct {
	Filter     PolicyTypeEnum `json:"Filter"`
	MaxResults *int64         `json:"MaxResults,omitempty"`
	NextToken  *string        `json:"NextToken,omitempty"`
	TargetID   string         `json:"TargetId"`
}
