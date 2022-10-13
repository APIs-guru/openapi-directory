package shared

type DescribeIPGroupsRequest struct {
	GroupIds   []string `json:"GroupIds"`
	MaxResults *int64   `json:"MaxResults"`
	NextToken  *string  `json:"NextToken"`
}
