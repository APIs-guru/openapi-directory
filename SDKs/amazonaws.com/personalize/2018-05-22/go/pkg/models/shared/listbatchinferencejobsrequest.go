package shared

type ListBatchInferenceJobsRequest struct {
	MaxResults         *int64  `json:"maxResults,omitempty"`
	NextToken          *string `json:"nextToken,omitempty"`
	SolutionVersionArn *string `json:"solutionVersionArn,omitempty"`
}
