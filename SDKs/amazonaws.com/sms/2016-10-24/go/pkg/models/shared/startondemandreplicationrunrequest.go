package shared

type StartOnDemandReplicationRunRequest struct {
	Description      *string `json:"description,omitempty"`
	ReplicationJobID string  `json:"replicationJobId"`
}
