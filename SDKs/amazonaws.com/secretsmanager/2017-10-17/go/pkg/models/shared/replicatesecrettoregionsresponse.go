package shared

type ReplicateSecretToRegionsResponse struct {
	Arn               *string                 `json:"ARN"`
	ReplicationStatus []ReplicationStatusType `json:"ReplicationStatus"`
}
