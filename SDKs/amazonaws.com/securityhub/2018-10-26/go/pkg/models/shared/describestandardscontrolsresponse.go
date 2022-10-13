package shared

type DescribeStandardsControlsResponse struct {
	Controls  []StandardsControl `json:"Controls"`
	NextToken *string            `json:"NextToken"`
}
