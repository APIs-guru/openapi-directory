package shared

// RuleGroupMetadata
// High-level information about a rule group, returned by <a>ListRuleGroups</a>. You can use the information provided in the metadata to retrieve and manage a rule group.
type RuleGroupMetadata struct {
	Arn  *string `json:"Arn,omitempty"`
	Name *string `json:"Name,omitempty"`
}
