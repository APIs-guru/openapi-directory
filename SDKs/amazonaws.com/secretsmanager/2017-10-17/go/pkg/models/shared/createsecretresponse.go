package shared

type CreateSecretResponse struct {
	Arn               *string                 `json:"ARN"`
	Name              *string                 `json:"Name"`
	ReplicationStatus []ReplicationStatusType `json:"ReplicationStatus"`
	VersionID         *string                 `json:"VersionId"`
}
