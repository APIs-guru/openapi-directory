package shared

type ListFirewallsRequest struct {
	MaxResults *int64   `json:"MaxResults"`
	NextToken  *string  `json:"NextToken"`
	VpcIds     []string `json:"VpcIds"`
}
