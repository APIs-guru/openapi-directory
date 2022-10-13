package shared

type ListEnvironmentsOutput struct {
	Environments []EnvironmentSummary `json:"environments"`
	NextToken    *string              `json:"nextToken"`
}
