package shared

type ListS3ResourcesRequest struct {
	MaxResults      *int64  `json:"maxResults"`
	MemberAccountID *string `json:"memberAccountId"`
	NextToken       *string `json:"nextToken"`
}
