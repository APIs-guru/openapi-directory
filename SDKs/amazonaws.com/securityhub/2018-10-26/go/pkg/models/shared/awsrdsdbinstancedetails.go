package shared

// AwsRdsDbInstanceDetails
// Contains the details of an Amazon RDS DB instance.
type AwsRdsDbInstanceDetails struct {
	AllocatedStorage                      *int64                             `json:"AllocatedStorage,omitempty"`
	AssociatedRoles                       []AwsRdsDbInstanceAssociatedRole   `json:"AssociatedRoles,omitempty"`
	AutoMinorVersionUpgrade               *bool                              `json:"AutoMinorVersionUpgrade,omitempty"`
	AvailabilityZone                      *string                            `json:"AvailabilityZone,omitempty"`
	BackupRetentionPeriod                 *int64                             `json:"BackupRetentionPeriod,omitempty"`
	CaCertificateIdentifier               *string                            `json:"CACertificateIdentifier,omitempty"`
	CharacterSetName                      *string                            `json:"CharacterSetName,omitempty"`
	CopyTagsToSnapshot                    *bool                              `json:"CopyTagsToSnapshot,omitempty"`
	DbClusterIdentifier                   *string                            `json:"DBClusterIdentifier,omitempty"`
	DbInstanceClass                       *string                            `json:"DBInstanceClass,omitempty"`
	DbInstanceIdentifier                  *string                            `json:"DBInstanceIdentifier,omitempty"`
	DbName                                *string                            `json:"DBName,omitempty"`
	DbInstancePort                        *int64                             `json:"DbInstancePort,omitempty"`
	DbInstanceStatus                      *string                            `json:"DbInstanceStatus,omitempty"`
	DbParameterGroups                     []AwsRdsDbParameterGroup           `json:"DbParameterGroups,omitempty"`
	DbSecurityGroups                      []string                           `json:"DbSecurityGroups,omitempty"`
	DbSubnetGroup                         *AwsRdsDbSubnetGroup               `json:"DbSubnetGroup,omitempty"`
	DbiResourceID                         *string                            `json:"DbiResourceId,omitempty"`
	DeletionProtection                    *bool                              `json:"DeletionProtection,omitempty"`
	DomainMemberships                     []AwsRdsDbDomainMembership         `json:"DomainMemberships,omitempty"`
	EnabledCloudWatchLogsExports          []string                           `json:"EnabledCloudWatchLogsExports,omitempty"`
	Endpoint                              *AwsRdsDbInstanceEndpoint          `json:"Endpoint,omitempty"`
	Engine                                *string                            `json:"Engine,omitempty"`
	EngineVersion                         *string                            `json:"EngineVersion,omitempty"`
	EnhancedMonitoringResourceArn         *string                            `json:"EnhancedMonitoringResourceArn,omitempty"`
	IamDatabaseAuthenticationEnabled      *bool                              `json:"IAMDatabaseAuthenticationEnabled,omitempty"`
	InstanceCreateTime                    *string                            `json:"InstanceCreateTime,omitempty"`
	Iops                                  *int64                             `json:"Iops,omitempty"`
	KmsKeyID                              *string                            `json:"KmsKeyId,omitempty"`
	LatestRestorableTime                  *string                            `json:"LatestRestorableTime,omitempty"`
	LicenseModel                          *string                            `json:"LicenseModel,omitempty"`
	ListenerEndpoint                      *AwsRdsDbInstanceEndpoint          `json:"ListenerEndpoint,omitempty"`
	MasterUsername                        *string                            `json:"MasterUsername,omitempty"`
	MaxAllocatedStorage                   *int64                             `json:"MaxAllocatedStorage,omitempty"`
	MonitoringInterval                    *int64                             `json:"MonitoringInterval,omitempty"`
	MonitoringRoleArn                     *string                            `json:"MonitoringRoleArn,omitempty"`
	MultiAz                               *bool                              `json:"MultiAz,omitempty"`
	OptionGroupMemberships                []AwsRdsDbOptionGroupMembership    `json:"OptionGroupMemberships,omitempty"`
	PendingModifiedValues                 *AwsRdsDbPendingModifiedValues     `json:"PendingModifiedValues,omitempty"`
	PerformanceInsightsEnabled            *bool                              `json:"PerformanceInsightsEnabled,omitempty"`
	PerformanceInsightsKmsKeyID           *string                            `json:"PerformanceInsightsKmsKeyId,omitempty"`
	PerformanceInsightsRetentionPeriod    *int64                             `json:"PerformanceInsightsRetentionPeriod,omitempty"`
	PreferredBackupWindow                 *string                            `json:"PreferredBackupWindow,omitempty"`
	PreferredMaintenanceWindow            *string                            `json:"PreferredMaintenanceWindow,omitempty"`
	ProcessorFeatures                     []AwsRdsDbProcessorFeature         `json:"ProcessorFeatures,omitempty"`
	PromotionTier                         *int64                             `json:"PromotionTier,omitempty"`
	PubliclyAccessible                    *bool                              `json:"PubliclyAccessible,omitempty"`
	ReadReplicaDbClusterIdentifiers       []string                           `json:"ReadReplicaDBClusterIdentifiers,omitempty"`
	ReadReplicaDbInstanceIdentifiers      []string                           `json:"ReadReplicaDBInstanceIdentifiers,omitempty"`
	ReadReplicaSourceDbInstanceIdentifier *string                            `json:"ReadReplicaSourceDBInstanceIdentifier,omitempty"`
	SecondaryAvailabilityZone             *string                            `json:"SecondaryAvailabilityZone,omitempty"`
	StatusInfos                           []AwsRdsDbStatusInfo               `json:"StatusInfos,omitempty"`
	StorageEncrypted                      *bool                              `json:"StorageEncrypted,omitempty"`
	StorageType                           *string                            `json:"StorageType,omitempty"`
	TdeCredentialArn                      *string                            `json:"TdeCredentialArn,omitempty"`
	Timezone                              *string                            `json:"Timezone,omitempty"`
	VpcSecurityGroups                     []AwsRdsDbInstanceVpcSecurityGroup `json:"VpcSecurityGroups,omitempty"`
}
