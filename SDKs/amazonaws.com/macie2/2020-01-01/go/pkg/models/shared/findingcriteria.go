package shared

// FindingCriteria
// Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
type FindingCriteria struct {
	Criterion map[string]CriterionAdditionalProperties `json:"criterion,omitempty"`
}
