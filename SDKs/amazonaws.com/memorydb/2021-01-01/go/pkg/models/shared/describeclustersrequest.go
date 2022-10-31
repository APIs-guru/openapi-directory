package shared



type DescribeClustersRequest struct {
    ClusterName *string `json:"ClusterName,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ShowShardDetails *bool `json:"ShowShardDetails,omitempty"`
    
}

