package shared

type DescribeLogStreamsRequest struct {
	Descending          *bool        `json:"descending"`
	Limit               *int64       `json:"limit"`
	LogGroupName        string       `json:"logGroupName"`
	LogStreamNamePrefix *string      `json:"logStreamNamePrefix"`
	NextToken           *string      `json:"nextToken"`
	OrderBy             *OrderByEnum `json:"orderBy"`
}
