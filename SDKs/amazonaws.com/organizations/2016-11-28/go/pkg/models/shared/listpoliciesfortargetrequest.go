package shared

type ListPoliciesForTargetRequest struct {
	Filter     PolicyTypeEnum `json:"Filter"`
	MaxResults *int64         `json:"MaxResults"`
	NextToken  *string        `json:"NextToken"`
	TargetID   string         `json:"TargetId"`
}
