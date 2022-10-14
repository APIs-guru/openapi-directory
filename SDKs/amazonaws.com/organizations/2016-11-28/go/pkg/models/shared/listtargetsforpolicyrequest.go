package shared

type ListTargetsForPolicyRequest struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	PolicyID   string  `json:"PolicyId"`
}
