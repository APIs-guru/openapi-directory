package shared



type ReplicationDetails struct {
    Replicated *bool `json:"replicated,omitempty"`
    ReplicatedExternally *bool `json:"replicatedExternally,omitempty"`
    ReplicationAccounts []string `json:"replicationAccounts,omitempty"`
    
}

