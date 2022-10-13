package shared

type DescribeUsersRequest struct {
	Filters    []Filter `json:"Filters"`
	MaxResults *int64   `json:"MaxResults"`
	NextToken  *string  `json:"NextToken"`
	UserName   *string  `json:"UserName"`
}
