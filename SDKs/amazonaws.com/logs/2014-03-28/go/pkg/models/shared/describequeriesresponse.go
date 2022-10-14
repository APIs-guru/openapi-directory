package shared

type DescribeQueriesResponse struct {
	NextToken *string     `json:"nextToken,omitempty"`
	Queries   []QueryInfo `json:"queries,omitempty"`
}
