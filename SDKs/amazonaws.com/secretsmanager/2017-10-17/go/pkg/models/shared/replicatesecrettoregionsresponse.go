package shared



type ReplicateSecretToRegionsResponse struct {
    Arn *string `json:"ARN,omitempty"`
    ReplicationStatus []ReplicationStatusType `json:"ReplicationStatus,omitempty"`
    
}

