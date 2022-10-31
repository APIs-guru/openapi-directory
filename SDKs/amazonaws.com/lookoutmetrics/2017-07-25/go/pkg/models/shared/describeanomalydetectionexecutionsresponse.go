package shared

type DescribeAnomalyDetectionExecutionsResponse struct {
	ExecutionList []ExecutionStatus `json:"ExecutionList,omitempty"`
	NextToken     *string           `json:"NextToken,omitempty"`
}
