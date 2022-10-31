package shared

type DescribeActivationsRequest struct {
	Filters    []DescribeActivationsFilter `json:"Filters,omitempty"`
	MaxResults *int64                      `json:"MaxResults,omitempty"`
	NextToken  *string                     `json:"NextToken,omitempty"`
}
