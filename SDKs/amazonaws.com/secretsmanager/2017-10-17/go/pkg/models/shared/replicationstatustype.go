package shared

import (
	"time"
)

// ReplicationStatusType
// A replication object consisting of a <code>RegionReplicationStatus</code> object and includes a Region, KMSKeyId, status, and status message.
type ReplicationStatusType struct {
	KmsKeyID         *string         `json:"KmsKeyId,omitempty"`
	LastAccessedDate *time.Time      `json:"LastAccessedDate,omitempty"`
	Region           *string         `json:"Region,omitempty"`
	Status           *StatusTypeEnum `json:"Status,omitempty"`
	StatusMessage    *string         `json:"StatusMessage,omitempty"`
}
