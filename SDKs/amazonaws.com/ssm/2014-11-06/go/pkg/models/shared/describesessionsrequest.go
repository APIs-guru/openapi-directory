package shared

type DescribeSessionsRequest struct {
	Filters    []SessionFilter  `json:"Filters"`
	MaxResults *int64           `json:"MaxResults"`
	NextToken  *string          `json:"NextToken"`
	State      SessionStateEnum `json:"State"`
}
