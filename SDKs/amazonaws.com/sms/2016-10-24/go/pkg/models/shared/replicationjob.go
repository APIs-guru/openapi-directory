package shared

import (
	"time"
)

type ReplicationJob struct {
	Description                 *string                  `json:"description"`
	Encrypted                   *bool                    `json:"encrypted"`
	Frequency                   *int64                   `json:"frequency"`
	KmsKeyID                    *string                  `json:"kmsKeyId"`
	LatestAmiID                 *string                  `json:"latestAmiId"`
	LicenseType                 *LicenseTypeEnum         `json:"licenseType"`
	NextReplicationRunStartTime *time.Time               `json:"nextReplicationRunStartTime"`
	NumberOfRecentAmisToKeep    *int64                   `json:"numberOfRecentAmisToKeep"`
	ReplicationJobID            *string                  `json:"replicationJobId"`
	ReplicationRunList          []ReplicationRun         `json:"replicationRunList"`
	RoleName                    *string                  `json:"roleName"`
	RunOnce                     *bool                    `json:"runOnce"`
	SeedReplicationTime         *time.Time               `json:"seedReplicationTime"`
	ServerID                    *string                  `json:"serverId"`
	ServerType                  *ServerTypeEnum          `json:"serverType"`
	State                       *ReplicationJobStateEnum `json:"state"`
	StatusMessage               *string                  `json:"statusMessage"`
	VMServer                    *VMServer                `json:"vmServer"`
}
