package shared



type ReplicateKeyResponse struct {
    ReplicaKeyMetadata *KeyMetadata `json:"ReplicaKeyMetadata,omitempty"`
    ReplicaPolicy *string `json:"ReplicaPolicy,omitempty"`
    ReplicaTags []Tag `json:"ReplicaTags,omitempty"`
    
}

