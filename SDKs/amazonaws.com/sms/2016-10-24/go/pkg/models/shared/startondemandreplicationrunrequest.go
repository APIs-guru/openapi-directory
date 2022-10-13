package shared

type StartOnDemandReplicationRunRequest struct {
	Description      *string `json:"description"`
	ReplicationJobID string  `json:"replicationJobId"`
}
