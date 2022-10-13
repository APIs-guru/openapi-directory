package shared

type ListCompilationJobsResponse struct {
	CompilationJobSummaries []CompilationJobSummary `json:"CompilationJobSummaries"`
	NextToken               *string                 `json:"NextToken"`
}
