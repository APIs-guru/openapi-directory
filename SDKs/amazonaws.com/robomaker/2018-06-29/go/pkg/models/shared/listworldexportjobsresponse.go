package shared

type ListWorldExportJobsResponse struct {
	NextToken               *string                 `json:"nextToken"`
	WorldExportJobSummaries []WorldExportJobSummary `json:"worldExportJobSummaries"`
}
