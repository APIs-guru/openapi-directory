package shared



type ListClustersResult struct {
    ClusterListEntries []ClusterListEntry `json:"ClusterListEntries,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

