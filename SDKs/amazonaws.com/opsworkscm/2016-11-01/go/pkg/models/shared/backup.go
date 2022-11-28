package shared

import (
	"time"
)

// Backup
// Describes a single backup.
type Backup struct {
	BackupArn                  *string           `json:"BackupArn,omitempty"`
	BackupID                   *string           `json:"BackupId,omitempty"`
	BackupType                 *BackupTypeEnum   `json:"BackupType,omitempty"`
	CreatedAt                  *time.Time        `json:"CreatedAt,omitempty"`
	Description                *string           `json:"Description,omitempty"`
	Engine                     *string           `json:"Engine,omitempty"`
	EngineModel                *string           `json:"EngineModel,omitempty"`
	EngineVersion              *string           `json:"EngineVersion,omitempty"`
	InstanceProfileArn         *string           `json:"InstanceProfileArn,omitempty"`
	InstanceType               *string           `json:"InstanceType,omitempty"`
	KeyPair                    *string           `json:"KeyPair,omitempty"`
	PreferredBackupWindow      *string           `json:"PreferredBackupWindow,omitempty"`
	PreferredMaintenanceWindow *string           `json:"PreferredMaintenanceWindow,omitempty"`
	S3DataSize                 *int64            `json:"S3DataSize,omitempty"`
	S3DataURL                  *string           `json:"S3DataUrl,omitempty"`
	S3LogURL                   *string           `json:"S3LogUrl,omitempty"`
	SecurityGroupIds           []string          `json:"SecurityGroupIds,omitempty"`
	ServerName                 *string           `json:"ServerName,omitempty"`
	ServiceRoleArn             *string           `json:"ServiceRoleArn,omitempty"`
	Status                     *BackupStatusEnum `json:"Status,omitempty"`
	StatusDescription          *string           `json:"StatusDescription,omitempty"`
	SubnetIds                  []string          `json:"SubnetIds,omitempty"`
	ToolsVersion               *string           `json:"ToolsVersion,omitempty"`
	UserArn                    *string           `json:"UserArn,omitempty"`
}
