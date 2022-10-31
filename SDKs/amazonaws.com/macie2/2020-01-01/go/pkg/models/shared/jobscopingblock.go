package shared

type JobScopingBlock struct {
	And []JobScopeTerm `json:"and,omitempty"`
}
