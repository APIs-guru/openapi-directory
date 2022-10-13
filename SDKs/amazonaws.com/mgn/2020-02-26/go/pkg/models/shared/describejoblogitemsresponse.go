package shared

type DescribeJobLogItemsResponse struct {
	Items     []JobLog `json:"items"`
	NextToken *string  `json:"nextToken"`
}
