package shared

import (
	"time"
)

type CreateReplicationJobRequest struct {
	Description              *string          `json:"description,omitempty"`
	Encrypted                *bool            `json:"encrypted,omitempty"`
	Frequency                *int64           `json:"frequency,omitempty"`
	KmsKeyID                 *string          `json:"kmsKeyId,omitempty"`
	LicenseType              *LicenseTypeEnum `json:"licenseType,omitempty"`
	NumberOfRecentAmisToKeep *int64           `json:"numberOfRecentAmisToKeep,omitempty"`
	RoleName                 *string          `json:"roleName,omitempty"`
	RunOnce                  *bool            `json:"runOnce,omitempty"`
	SeedReplicationTime      time.Time        `json:"seedReplicationTime"`
	ServerID                 string           `json:"serverId"`
}
