package shared

type ReplicateKeyResponse struct {
	ReplicaKeyMetadata *KeyMetadata `json:"ReplicaKeyMetadata"`
	ReplicaPolicy      *string      `json:"ReplicaPolicy"`
	ReplicaTags        []Tag        `json:"ReplicaTags"`
}
