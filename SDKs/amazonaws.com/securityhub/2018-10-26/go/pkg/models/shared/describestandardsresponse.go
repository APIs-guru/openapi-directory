package shared

type DescribeStandardsResponse struct {
	NextToken *string    `json:"NextToken,omitempty"`
	Standards []Standard `json:"Standards,omitempty"`
}
