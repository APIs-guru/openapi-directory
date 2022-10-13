package shared

type CreateServerRequest struct {
	AssociatePublicIPAddress   *bool             `json:"AssociatePublicIpAddress"`
	BackupID                   *string           `json:"BackupId"`
	BackupRetentionCount       *int64            `json:"BackupRetentionCount"`
	CustomCertificate          *string           `json:"CustomCertificate"`
	CustomDomain               *string           `json:"CustomDomain"`
	CustomPrivateKey           *string           `json:"CustomPrivateKey"`
	DisableAutomatedBackup     *bool             `json:"DisableAutomatedBackup"`
	Engine                     string            `json:"Engine"`
	EngineAttributes           []EngineAttribute `json:"EngineAttributes"`
	EngineModel                *string           `json:"EngineModel"`
	EngineVersion              *string           `json:"EngineVersion"`
	InstanceProfileArn         string            `json:"InstanceProfileArn"`
	InstanceType               string            `json:"InstanceType"`
	KeyPair                    *string           `json:"KeyPair"`
	PreferredBackupWindow      *string           `json:"PreferredBackupWindow"`
	PreferredMaintenanceWindow *string           `json:"PreferredMaintenanceWindow"`
	SecurityGroupIds           []string          `json:"SecurityGroupIds"`
	ServerName                 string            `json:"ServerName"`
	ServiceRoleArn             string            `json:"ServiceRoleArn"`
	SubnetIds                  []string          `json:"SubnetIds"`
	Tags                       []Tag             `json:"Tags"`
}
