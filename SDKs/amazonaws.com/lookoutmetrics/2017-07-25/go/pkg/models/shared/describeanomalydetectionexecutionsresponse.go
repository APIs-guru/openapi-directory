package shared

type DescribeAnomalyDetectionExecutionsResponse struct {
	ExecutionList []ExecutionStatus `json:"ExecutionList"`
	NextToken     *string           `json:"NextToken"`
}
