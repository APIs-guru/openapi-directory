package shared

import (
	"time"
)

type UpdateReplicationJobRequest struct {
	Description                 *string          `json:"description,omitempty"`
	Encrypted                   *bool            `json:"encrypted,omitempty"`
	Frequency                   *int64           `json:"frequency,omitempty"`
	KmsKeyID                    *string          `json:"kmsKeyId,omitempty"`
	LicenseType                 *LicenseTypeEnum `json:"licenseType,omitempty"`
	NextReplicationRunStartTime *time.Time       `json:"nextReplicationRunStartTime,omitempty"`
	NumberOfRecentAmisToKeep    *int64           `json:"numberOfRecentAmisToKeep,omitempty"`
	ReplicationJobID            string           `json:"replicationJobId"`
	RoleName                    *string          `json:"roleName,omitempty"`
}
