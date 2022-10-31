package shared

type DescribeJobLogItemsResponse struct {
	Items     []JobLog `json:"items,omitempty"`
	NextToken *string  `json:"nextToken,omitempty"`
}
