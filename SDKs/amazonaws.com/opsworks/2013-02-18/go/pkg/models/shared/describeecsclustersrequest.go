package shared

type DescribeEcsClustersRequest struct {
	EcsClusterArns []string `json:"EcsClusterArns"`
	MaxResults     *int64   `json:"MaxResults"`
	NextToken      *string  `json:"NextToken"`
	StackID        *string  `json:"StackId"`
}
