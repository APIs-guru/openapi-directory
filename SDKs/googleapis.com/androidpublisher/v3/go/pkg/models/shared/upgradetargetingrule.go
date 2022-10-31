package shared



type UpgradeTargetingRule struct {
    BillingPeriodDuration *string `json:"billingPeriodDuration,omitempty"`
    OncePerUser *bool `json:"oncePerUser,omitempty"`
    Scope *TargetingRuleScope `json:"scope,omitempty"`
    
}

