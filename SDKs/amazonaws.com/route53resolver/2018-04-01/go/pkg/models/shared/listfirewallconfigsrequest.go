package shared

type ListFirewallConfigsRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
