package shared

type ListAutoMlJobsResponse struct {
	AutoMlJobSummaries []AutoMlJobSummary `json:"AutoMLJobSummaries"`
	NextToken          *string            `json:"NextToken"`
}
