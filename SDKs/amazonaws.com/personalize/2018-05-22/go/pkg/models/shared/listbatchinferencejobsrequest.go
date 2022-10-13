package shared

type ListBatchInferenceJobsRequest struct {
	MaxResults         *int64  `json:"maxResults"`
	NextToken          *string `json:"nextToken"`
	SolutionVersionArn *string `json:"solutionVersionArn"`
}
