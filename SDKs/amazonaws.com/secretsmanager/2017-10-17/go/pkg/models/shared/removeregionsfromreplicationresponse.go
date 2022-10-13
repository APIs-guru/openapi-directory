package shared

type RemoveRegionsFromReplicationResponse struct {
	Arn               *string                 `json:"ARN"`
	ReplicationStatus []ReplicationStatusType `json:"ReplicationStatus"`
}
