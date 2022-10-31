package shared

type ListCampaignsRequest struct {
	MaxResults  *int64  `json:"maxResults,omitempty"`
	NextToken   *string `json:"nextToken,omitempty"`
	SolutionArn *string `json:"solutionArn,omitempty"`
}
