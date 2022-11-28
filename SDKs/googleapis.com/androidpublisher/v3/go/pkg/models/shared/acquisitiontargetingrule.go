package shared

// AcquisitionTargetingRule
// Represents a targeting rule of the form: User never had {scope} before.
type AcquisitionTargetingRule struct {
	Scope *TargetingRuleScope `json:"scope,omitempty"`
}
