package shared

type DescribeLogGroupsRequest struct {
	Limit              *int64  `json:"limit"`
	LogGroupNamePrefix *string `json:"logGroupNamePrefix"`
	NextToken          *string `json:"nextToken"`
}
