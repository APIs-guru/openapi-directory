package shared

import (
	"time"
)

type ReplicationJob struct {
	Description                 *string                  `json:"description,omitempty"`
	Encrypted                   *bool                    `json:"encrypted,omitempty"`
	Frequency                   *int64                   `json:"frequency,omitempty"`
	KmsKeyID                    *string                  `json:"kmsKeyId,omitempty"`
	LatestAmiID                 *string                  `json:"latestAmiId,omitempty"`
	LicenseType                 *LicenseTypeEnum         `json:"licenseType,omitempty"`
	NextReplicationRunStartTime *time.Time               `json:"nextReplicationRunStartTime,omitempty"`
	NumberOfRecentAmisToKeep    *int64                   `json:"numberOfRecentAmisToKeep,omitempty"`
	ReplicationJobID            *string                  `json:"replicationJobId,omitempty"`
	ReplicationRunList          []ReplicationRun         `json:"replicationRunList,omitempty"`
	RoleName                    *string                  `json:"roleName,omitempty"`
	RunOnce                     *bool                    `json:"runOnce,omitempty"`
	SeedReplicationTime         *time.Time               `json:"seedReplicationTime,omitempty"`
	ServerID                    *string                  `json:"serverId,omitempty"`
	ServerType                  *ServerTypeEnum          `json:"serverType,omitempty"`
	State                       *ReplicationJobStateEnum `json:"state,omitempty"`
	StatusMessage               *string                  `json:"statusMessage,omitempty"`
	VMServer                    *VMServer                `json:"vmServer,omitempty"`
}
