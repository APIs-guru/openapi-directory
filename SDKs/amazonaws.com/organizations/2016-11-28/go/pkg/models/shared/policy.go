package shared

// Policy
// Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies.
type Policy struct {
	Content       *string        `json:"Content,omitempty"`
	PolicySummary *PolicySummary `json:"PolicySummary,omitempty"`
}
