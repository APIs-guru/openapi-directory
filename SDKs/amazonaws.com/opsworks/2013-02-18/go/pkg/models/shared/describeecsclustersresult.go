package shared



type DescribeEcsClustersResult struct {
    EcsClusters []EcsCluster `json:"EcsClusters,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

