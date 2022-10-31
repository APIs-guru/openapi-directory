package shared

type FirewallRuleActionEnum string

const (
	FirewallRuleActionEnumUnspecifiedAction FirewallRuleActionEnum = "UNSPECIFIED_ACTION"
	FirewallRuleActionEnumAllow             FirewallRuleActionEnum = "ALLOW"
	FirewallRuleActionEnumDeny              FirewallRuleActionEnum = "DENY"
)

type FirewallRule struct {
	Action      *FirewallRuleActionEnum `json:"action,omitempty"`
	Description *string                 `json:"description,omitempty"`
	Priority    *int32                  `json:"priority,omitempty"`
	SourceRange *string                 `json:"sourceRange,omitempty"`
}
