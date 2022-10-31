package shared



type BatchUpdateClusterResponse struct {
    ProcessedClusters []Cluster `json:"ProcessedClusters,omitempty"`
    UnprocessedClusters []UnprocessedCluster `json:"UnprocessedClusters,omitempty"`
    
}

