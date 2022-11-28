package shared

// WafAction
// Details about the action that CloudFront or WAF takes when a web request matches the conditions in the rule.
type WafAction struct {
	Type *string `json:"Type,omitempty"`
}
