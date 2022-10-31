package shared

type DescribeEcsClustersRequest struct {
	EcsClusterArns []string `json:"EcsClusterArns,omitempty"`
	MaxResults     *int64   `json:"MaxResults,omitempty"`
	NextToken      *string  `json:"NextToken,omitempty"`
	StackID        *string  `json:"StackId,omitempty"`
}
