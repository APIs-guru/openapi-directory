package shared

type DescribeLogGroupsResponse struct {
	LogGroups []LogGroup `json:"logGroups"`
	NextToken *string    `json:"nextToken"`
}
