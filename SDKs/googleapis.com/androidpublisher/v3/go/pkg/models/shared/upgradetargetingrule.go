package shared

// UpgradeTargetingRule
// Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}].
type UpgradeTargetingRule struct {
	BillingPeriodDuration *string             `json:"billingPeriodDuration,omitempty"`
	OncePerUser           *bool               `json:"oncePerUser,omitempty"`
	Scope                 *TargetingRuleScope `json:"scope,omitempty"`
}
