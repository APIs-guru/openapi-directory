package shared

type ListTargetsForPolicyRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	PolicyID   string  `json:"PolicyId"`
}
