package shared



type Cluster struct {
    ClusterArn *string `json:"ClusterArn,omitempty"`
    ClusterEndpoints []ClusterEndpoint `json:"ClusterEndpoints,omitempty"`
    Name *string `json:"Name,omitempty"`
    Status *StatusEnum `json:"Status,omitempty"`
    
}

