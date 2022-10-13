package shared

type ListProjectsOutput struct {
	NextToken          *string          `json:"NextToken"`
	ProjectSummaryList []ProjectSummary `json:"ProjectSummaryList"`
}
