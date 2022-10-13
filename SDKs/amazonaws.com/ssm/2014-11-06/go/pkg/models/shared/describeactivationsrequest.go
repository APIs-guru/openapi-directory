package shared

type DescribeActivationsRequest struct {
	Filters    []DescribeActivationsFilter `json:"Filters"`
	MaxResults *int64                      `json:"MaxResults"`
	NextToken  *string                     `json:"NextToken"`
}
