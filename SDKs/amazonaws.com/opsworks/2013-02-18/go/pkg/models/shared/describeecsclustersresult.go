package shared

type DescribeEcsClustersResult struct {
	EcsClusters []EcsCluster `json:"EcsClusters"`
	NextToken   *string      `json:"NextToken"`
}
