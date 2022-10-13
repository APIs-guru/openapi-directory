package shared

import (
	"time"
)

type Backup struct {
	BackupArn                  *string           `json:"BackupArn"`
	BackupID                   *string           `json:"BackupId"`
	BackupType                 *BackupTypeEnum   `json:"BackupType"`
	CreatedAt                  *time.Time        `json:"CreatedAt"`
	Description                *string           `json:"Description"`
	Engine                     *string           `json:"Engine"`
	EngineModel                *string           `json:"EngineModel"`
	EngineVersion              *string           `json:"EngineVersion"`
	InstanceProfileArn         *string           `json:"InstanceProfileArn"`
	InstanceType               *string           `json:"InstanceType"`
	KeyPair                    *string           `json:"KeyPair"`
	PreferredBackupWindow      *string           `json:"PreferredBackupWindow"`
	PreferredMaintenanceWindow *string           `json:"PreferredMaintenanceWindow"`
	S3DataSize                 *int64            `json:"S3DataSize"`
	S3DataURL                  *string           `json:"S3DataUrl"`
	S3LogURL                   *string           `json:"S3LogUrl"`
	SecurityGroupIds           []string          `json:"SecurityGroupIds"`
	ServerName                 *string           `json:"ServerName"`
	ServiceRoleArn             *string           `json:"ServiceRoleArn"`
	Status                     *BackupStatusEnum `json:"Status"`
	StatusDescription          *string           `json:"StatusDescription"`
	SubnetIds                  []string          `json:"SubnetIds"`
	ToolsVersion               *string           `json:"ToolsVersion"`
	UserArn                    *string           `json:"UserArn"`
}
