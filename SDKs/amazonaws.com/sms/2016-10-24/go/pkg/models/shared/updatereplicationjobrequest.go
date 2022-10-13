package shared

import (
	"time"
)

type UpdateReplicationJobRequest struct {
	Description                 *string          `json:"description"`
	Encrypted                   *bool            `json:"encrypted"`
	Frequency                   *int64           `json:"frequency"`
	KmsKeyID                    *string          `json:"kmsKeyId"`
	LicenseType                 *LicenseTypeEnum `json:"licenseType"`
	NextReplicationRunStartTime *time.Time       `json:"nextReplicationRunStartTime"`
	NumberOfRecentAmisToKeep    *int64           `json:"numberOfRecentAmisToKeep"`
	ReplicationJobID            string           `json:"replicationJobId"`
	RoleName                    *string          `json:"roleName"`
}
