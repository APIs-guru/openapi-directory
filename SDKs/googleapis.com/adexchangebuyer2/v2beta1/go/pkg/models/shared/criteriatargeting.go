package shared

type CriteriaTargeting struct {
	ExcludedCriteriaIds []string `json:"excludedCriteriaIds"`
	TargetedCriteriaIds []string `json:"targetedCriteriaIds"`
}
