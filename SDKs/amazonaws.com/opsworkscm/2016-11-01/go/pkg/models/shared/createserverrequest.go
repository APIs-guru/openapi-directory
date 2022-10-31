package shared



type CreateServerRequest struct {
    AssociatePublicIPAddress *bool `json:"AssociatePublicIpAddress,omitempty"`
    BackupID *string `json:"BackupId,omitempty"`
    BackupRetentionCount *int64 `json:"BackupRetentionCount,omitempty"`
    CustomCertificate *string `json:"CustomCertificate,omitempty"`
    CustomDomain *string `json:"CustomDomain,omitempty"`
    CustomPrivateKey *string `json:"CustomPrivateKey,omitempty"`
    DisableAutomatedBackup *bool `json:"DisableAutomatedBackup,omitempty"`
    Engine string `json:"Engine"`
    EngineAttributes []EngineAttribute `json:"EngineAttributes,omitempty"`
    EngineModel *string `json:"EngineModel,omitempty"`
    EngineVersion *string `json:"EngineVersion,omitempty"`
    InstanceProfileArn string `json:"InstanceProfileArn"`
    InstanceType string `json:"InstanceType"`
    KeyPair *string `json:"KeyPair,omitempty"`
    PreferredBackupWindow *string `json:"PreferredBackupWindow,omitempty"`
    PreferredMaintenanceWindow *string `json:"PreferredMaintenanceWindow,omitempty"`
    SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
    ServerName string `json:"ServerName"`
    ServiceRoleArn string `json:"ServiceRoleArn"`
    SubnetIds []string `json:"SubnetIds,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

