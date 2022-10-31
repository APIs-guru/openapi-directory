package shared

type CriteriaBlockForJob struct {
	And []CriteriaForJob `json:"and,omitempty"`
}
