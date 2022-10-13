package shared

type DescribeQueriesResponse struct {
	NextToken *string     `json:"nextToken"`
	Queries   []QueryInfo `json:"queries"`
}
