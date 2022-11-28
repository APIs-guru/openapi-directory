package shared

// TargetingRuleScope
// Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement.
type TargetingRuleScope struct {
	SpecificSubscriptionInApp *string `json:"specificSubscriptionInApp,omitempty"`
}
