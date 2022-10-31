package shared

type DescribeIPGroupsRequest struct {
	GroupIds   []string `json:"GroupIds,omitempty"`
	MaxResults *int64   `json:"MaxResults,omitempty"`
	NextToken  *string  `json:"NextToken,omitempty"`
}
