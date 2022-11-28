package shared

// ConstraintSummary
// Summary information about a constraint.
type ConstraintSummary struct {
	Description *string `json:"Description,omitempty"`
	Type        *string `json:"Type,omitempty"`
}
