package shared

type ListFirewallPoliciesRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
