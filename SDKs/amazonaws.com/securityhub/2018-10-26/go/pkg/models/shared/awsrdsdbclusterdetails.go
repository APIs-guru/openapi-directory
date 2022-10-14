package shared

type AwsRdsDbClusterDetails struct {
	ActivityStreamStatus             *string                                `json:"ActivityStreamStatus,omitempty"`
	AllocatedStorage                 *int64                                 `json:"AllocatedStorage,omitempty"`
	AssociatedRoles                  []AwsRdsDbClusterAssociatedRole        `json:"AssociatedRoles,omitempty"`
	AvailabilityZones                []string                               `json:"AvailabilityZones,omitempty"`
	BackupRetentionPeriod            *int64                                 `json:"BackupRetentionPeriod,omitempty"`
	ClusterCreateTime                *string                                `json:"ClusterCreateTime,omitempty"`
	CopyTagsToSnapshot               *bool                                  `json:"CopyTagsToSnapshot,omitempty"`
	CrossAccountClone                *bool                                  `json:"CrossAccountClone,omitempty"`
	CustomEndpoints                  []string                               `json:"CustomEndpoints,omitempty"`
	DatabaseName                     *string                                `json:"DatabaseName,omitempty"`
	DbClusterIdentifier              *string                                `json:"DbClusterIdentifier,omitempty"`
	DbClusterMembers                 []AwsRdsDbClusterMember                `json:"DbClusterMembers,omitempty"`
	DbClusterOptionGroupMemberships  []AwsRdsDbClusterOptionGroupMembership `json:"DbClusterOptionGroupMemberships,omitempty"`
	DbClusterParameterGroup          *string                                `json:"DbClusterParameterGroup,omitempty"`
	DbClusterResourceID              *string                                `json:"DbClusterResourceId,omitempty"`
	DbSubnetGroup                    *string                                `json:"DbSubnetGroup,omitempty"`
	DeletionProtection               *bool                                  `json:"DeletionProtection,omitempty"`
	DomainMemberships                []AwsRdsDbDomainMembership             `json:"DomainMemberships,omitempty"`
	EnabledCloudWatchLogsExports     []string                               `json:"EnabledCloudWatchLogsExports,omitempty"`
	Endpoint                         *string                                `json:"Endpoint,omitempty"`
	Engine                           *string                                `json:"Engine,omitempty"`
	EngineMode                       *string                                `json:"EngineMode,omitempty"`
	EngineVersion                    *string                                `json:"EngineVersion,omitempty"`
	HostedZoneID                     *string                                `json:"HostedZoneId,omitempty"`
	HTTPEndpointEnabled              *bool                                  `json:"HttpEndpointEnabled,omitempty"`
	IamDatabaseAuthenticationEnabled *bool                                  `json:"IamDatabaseAuthenticationEnabled,omitempty"`
	KmsKeyID                         *string                                `json:"KmsKeyId,omitempty"`
	MasterUsername                   *string                                `json:"MasterUsername,omitempty"`
	MultiAz                          *bool                                  `json:"MultiAz,omitempty"`
	Port                             *int64                                 `json:"Port,omitempty"`
	PreferredBackupWindow            *string                                `json:"PreferredBackupWindow,omitempty"`
	PreferredMaintenanceWindow       *string                                `json:"PreferredMaintenanceWindow,omitempty"`
	ReadReplicaIdentifiers           []string                               `json:"ReadReplicaIdentifiers,omitempty"`
	ReaderEndpoint                   *string                                `json:"ReaderEndpoint,omitempty"`
	Status                           *string                                `json:"Status,omitempty"`
	StorageEncrypted                 *bool                                  `json:"StorageEncrypted,omitempty"`
	VpcSecurityGroups                []AwsRdsDbInstanceVpcSecurityGroup     `json:"VpcSecurityGroups,omitempty"`
}
