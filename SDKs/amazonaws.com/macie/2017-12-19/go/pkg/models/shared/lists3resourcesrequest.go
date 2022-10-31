package shared

type ListS3ResourcesRequest struct {
	MaxResults      *int64  `json:"maxResults,omitempty"`
	MemberAccountID *string `json:"memberAccountId,omitempty"`
	NextToken       *string `json:"nextToken,omitempty"`
}
