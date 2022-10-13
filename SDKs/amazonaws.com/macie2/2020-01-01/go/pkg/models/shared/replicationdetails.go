package shared

type ReplicationDetails struct {
	Replicated           *bool    `json:"replicated"`
	ReplicatedExternally *bool    `json:"replicatedExternally"`
	ReplicationAccounts  []string `json:"replicationAccounts"`
}
