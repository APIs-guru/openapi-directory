package shared

type FirewallRuleActionEnum string

const (
	FirewallRuleActionEnumUnspecifiedAction FirewallRuleActionEnum = "UNSPECIFIED_ACTION"
	FirewallRuleActionEnumAllow             FirewallRuleActionEnum = "ALLOW"
	FirewallRuleActionEnumDeny              FirewallRuleActionEnum = "DENY"
)

type FirewallRule struct {
	Action      *FirewallRuleActionEnum `json:"action"`
	Description *string                 `json:"description"`
	Priority    *int32                  `json:"priority"`
	SourceRange *string                 `json:"sourceRange"`
}
