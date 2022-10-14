package shared

type ListMemberAccountsRequest struct {
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
}
