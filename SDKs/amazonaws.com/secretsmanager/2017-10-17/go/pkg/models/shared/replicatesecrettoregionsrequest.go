package shared



type ReplicateSecretToRegionsRequest struct {
    AddReplicaRegions []ReplicaRegionType `json:"AddReplicaRegions"`
    ForceOverwriteReplicaSecret *bool `json:"ForceOverwriteReplicaSecret,omitempty"`
    SecretID string `json:"SecretId"`
    
}

