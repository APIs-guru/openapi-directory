package shared

import (
	"time"
)

type Server struct {
	AssociatePublicIPAddress   *bool                  `json:"AssociatePublicIpAddress"`
	BackupRetentionCount       *int64                 `json:"BackupRetentionCount"`
	CloudFormationStackArn     *string                `json:"CloudFormationStackArn"`
	CreatedAt                  *time.Time             `json:"CreatedAt"`
	CustomDomain               *string                `json:"CustomDomain"`
	DisableAutomatedBackup     *bool                  `json:"DisableAutomatedBackup"`
	Endpoint                   *string                `json:"Endpoint"`
	Engine                     *string                `json:"Engine"`
	EngineAttributes           []EngineAttribute      `json:"EngineAttributes"`
	EngineModel                *string                `json:"EngineModel"`
	EngineVersion              *string                `json:"EngineVersion"`
	InstanceProfileArn         *string                `json:"InstanceProfileArn"`
	InstanceType               *string                `json:"InstanceType"`
	KeyPair                    *string                `json:"KeyPair"`
	MaintenanceStatus          *MaintenanceStatusEnum `json:"MaintenanceStatus"`
	PreferredBackupWindow      *string                `json:"PreferredBackupWindow"`
	PreferredMaintenanceWindow *string                `json:"PreferredMaintenanceWindow"`
	SecurityGroupIds           []string               `json:"SecurityGroupIds"`
	ServerArn                  *string                `json:"ServerArn"`
	ServerName                 *string                `json:"ServerName"`
	ServiceRoleArn             *string                `json:"ServiceRoleArn"`
	Status                     *ServerStatusEnum      `json:"Status"`
	StatusReason               *string                `json:"StatusReason"`
	SubnetIds                  []string               `json:"SubnetIds"`
}
