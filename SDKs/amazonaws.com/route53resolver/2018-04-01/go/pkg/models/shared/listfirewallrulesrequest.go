package shared

type ListFirewallRulesRequest struct {
	Action              *ActionEnum `json:"Action"`
	FirewallRuleGroupID string      `json:"FirewallRuleGroupId"`
	MaxResults          *int64      `json:"MaxResults"`
	NextToken           *string     `json:"NextToken"`
	Priority            *int64      `json:"Priority"`
}
