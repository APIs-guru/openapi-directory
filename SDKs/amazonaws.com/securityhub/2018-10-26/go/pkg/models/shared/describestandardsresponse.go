package shared

type DescribeStandardsResponse struct {
	NextToken *string    `json:"NextToken"`
	Standards []Standard `json:"Standards"`
}
