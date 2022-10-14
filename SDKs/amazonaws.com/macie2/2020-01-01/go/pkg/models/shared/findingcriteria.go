package shared

type FindingCriteria struct {
	Criterion map[string]CriterionAdditionalProperties `json:"criterion,omitempty"`
}
