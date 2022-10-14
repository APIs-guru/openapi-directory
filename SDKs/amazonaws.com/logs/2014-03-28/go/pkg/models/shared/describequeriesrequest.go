package shared

type DescribeQueriesRequest struct {
	LogGroupName *string          `json:"logGroupName,omitempty"`
	MaxResults   *int64           `json:"maxResults,omitempty"`
	NextToken    *string          `json:"nextToken,omitempty"`
	Status       *QueryStatusEnum `json:"status,omitempty"`
}
