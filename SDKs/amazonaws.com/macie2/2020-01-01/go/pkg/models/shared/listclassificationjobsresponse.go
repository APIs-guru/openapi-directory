package shared

type ListClassificationJobsResponse struct {
	Items     []JobSummary `json:"items"`
	NextToken *string      `json:"nextToken"`
}
