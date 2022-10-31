package shared

type RemoveRegionsFromReplicationResponse struct {
	Arn               *string                 `json:"ARN,omitempty"`
	ReplicationStatus []ReplicationStatusType `json:"ReplicationStatus,omitempty"`
}
