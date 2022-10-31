package shared

type ListClassificationJobsResponse struct {
	Items     []JobSummary `json:"items,omitempty"`
	NextToken *string      `json:"nextToken,omitempty"`
}
