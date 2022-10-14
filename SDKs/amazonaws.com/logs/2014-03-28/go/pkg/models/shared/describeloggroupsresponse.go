package shared

type DescribeLogGroupsResponse struct {
	LogGroups []LogGroup `json:"logGroups,omitempty"`
	NextToken *string    `json:"nextToken,omitempty"`
}
