package shared

// DescribeEcsClustersResult
// Contains the response to a <code>DescribeEcsClusters</code> request.
type DescribeEcsClustersResult struct {
	EcsClusters []EcsCluster `json:"EcsClusters,omitempty"`
	NextToken   *string      `json:"NextToken,omitempty"`
}
