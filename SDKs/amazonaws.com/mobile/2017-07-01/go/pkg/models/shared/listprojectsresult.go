package shared

type ListProjectsResult struct {
	NextToken *string          `json:"nextToken"`
	Projects  []ProjectSummary `json:"projects"`
}
