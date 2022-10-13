package shared

type UpgradeTargetingRule struct {
	BillingPeriodDuration *string             `json:"billingPeriodDuration"`
	OncePerUser           *bool               `json:"oncePerUser"`
	Scope                 *TargetingRuleScope `json:"scope"`
}
