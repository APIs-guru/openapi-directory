package shared

import (
"time")

type Server struct {
    AssociatePublicIPAddress *bool `json:"AssociatePublicIpAddress,omitempty"`
    BackupRetentionCount *int64 `json:"BackupRetentionCount,omitempty"`
    CloudFormationStackArn *string `json:"CloudFormationStackArn,omitempty"`
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    CustomDomain *string `json:"CustomDomain,omitempty"`
    DisableAutomatedBackup *bool `json:"DisableAutomatedBackup,omitempty"`
    Endpoint *string `json:"Endpoint,omitempty"`
    Engine *string `json:"Engine,omitempty"`
    EngineAttributes []EngineAttribute `json:"EngineAttributes,omitempty"`
    EngineModel *string `json:"EngineModel,omitempty"`
    EngineVersion *string `json:"EngineVersion,omitempty"`
    InstanceProfileArn *string `json:"InstanceProfileArn,omitempty"`
    InstanceType *string `json:"InstanceType,omitempty"`
    KeyPair *string `json:"KeyPair,omitempty"`
    MaintenanceStatus *MaintenanceStatusEnum `json:"MaintenanceStatus,omitempty"`
    PreferredBackupWindow *string `json:"PreferredBackupWindow,omitempty"`
    PreferredMaintenanceWindow *string `json:"PreferredMaintenanceWindow,omitempty"`
    SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
    ServerArn *string `json:"ServerArn,omitempty"`
    ServerName *string `json:"ServerName,omitempty"`
    ServiceRoleArn *string `json:"ServiceRoleArn,omitempty"`
    Status *ServerStatusEnum `json:"Status,omitempty"`
    StatusReason *string `json:"StatusReason,omitempty"`
    SubnetIds []string `json:"SubnetIds,omitempty"`
    
}

