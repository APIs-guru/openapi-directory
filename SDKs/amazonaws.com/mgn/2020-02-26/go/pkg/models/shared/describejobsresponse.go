package shared

type DescribeJobsResponse struct {
	Items     []Job   `json:"items"`
	NextToken *string `json:"nextToken"`
}
