package shared

type DescribeQueriesRequest struct {
	LogGroupName *string          `json:"logGroupName"`
	MaxResults   *int64           `json:"maxResults"`
	NextToken    *string          `json:"nextToken"`
	Status       *QueryStatusEnum `json:"status"`
}
