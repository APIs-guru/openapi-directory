package shared

type DescribeStandardsControlsResponse struct {
	Controls  []StandardsControl `json:"Controls,omitempty"`
	NextToken *string            `json:"NextToken,omitempty"`
}
