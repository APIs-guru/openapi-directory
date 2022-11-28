package shared

import (
	"time"
)

// ServerReplicationParameters
// The replication parameters for replicating a server.
type ServerReplicationParameters struct {
	Encrypted                *bool            `json:"encrypted,omitempty"`
	Frequency                *int64           `json:"frequency,omitempty"`
	KmsKeyID                 *string          `json:"kmsKeyId,omitempty"`
	LicenseType              *LicenseTypeEnum `json:"licenseType,omitempty"`
	NumberOfRecentAmisToKeep *int64           `json:"numberOfRecentAmisToKeep,omitempty"`
	RunOnce                  *bool            `json:"runOnce,omitempty"`
	SeedTime                 *time.Time       `json:"seedTime,omitempty"`
}
