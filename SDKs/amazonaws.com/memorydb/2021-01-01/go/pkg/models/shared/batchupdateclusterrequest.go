package shared



type BatchUpdateClusterRequest struct {
    ClusterNames []string `json:"ClusterNames"`
    ServiceUpdate *ServiceUpdateRequest `json:"ServiceUpdate,omitempty"`
    
}

