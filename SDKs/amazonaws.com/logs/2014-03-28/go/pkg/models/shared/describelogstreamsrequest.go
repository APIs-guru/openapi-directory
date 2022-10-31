package shared

type DescribeLogStreamsRequest struct {
	Descending          *bool        `json:"descending,omitempty"`
	Limit               *int64       `json:"limit,omitempty"`
	LogGroupName        string       `json:"logGroupName"`
	LogStreamNamePrefix *string      `json:"logStreamNamePrefix,omitempty"`
	NextToken           *string      `json:"nextToken,omitempty"`
	OrderBy             *OrderByEnum `json:"orderBy,omitempty"`
}
