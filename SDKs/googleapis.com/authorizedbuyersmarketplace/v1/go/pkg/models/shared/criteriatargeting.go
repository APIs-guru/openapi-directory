package shared

// CriteriaTargeting
// Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.
type CriteriaTargeting struct {
	ExcludedCriteriaIds []string `json:"excludedCriteriaIds,omitempty"`
	TargetedCriteriaIds []string `json:"targetedCriteriaIds,omitempty"`
}
