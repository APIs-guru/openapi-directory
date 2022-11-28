package shared

// PatchRuleGroup
// A set of rules defining the approval rules for a patch baseline.
type PatchRuleGroup struct {
	PatchRules []PatchRule `json:"PatchRules"`
}
