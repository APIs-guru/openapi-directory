package shared

// ReplicationDetails
// Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts.
type ReplicationDetails struct {
	Replicated           *bool    `json:"replicated,omitempty"`
	ReplicatedExternally *bool    `json:"replicatedExternally,omitempty"`
	ReplicationAccounts  []string `json:"replicationAccounts,omitempty"`
}
