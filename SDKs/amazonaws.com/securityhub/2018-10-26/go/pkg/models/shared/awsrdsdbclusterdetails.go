package shared

type AwsRdsDbClusterDetails struct {
	ActivityStreamStatus             *string                                `json:"ActivityStreamStatus"`
	AllocatedStorage                 *int64                                 `json:"AllocatedStorage"`
	AssociatedRoles                  []AwsRdsDbClusterAssociatedRole        `json:"AssociatedRoles"`
	AvailabilityZones                []string                               `json:"AvailabilityZones"`
	BackupRetentionPeriod            *int64                                 `json:"BackupRetentionPeriod"`
	ClusterCreateTime                *string                                `json:"ClusterCreateTime"`
	CopyTagsToSnapshot               *bool                                  `json:"CopyTagsToSnapshot"`
	CrossAccountClone                *bool                                  `json:"CrossAccountClone"`
	CustomEndpoints                  []string                               `json:"CustomEndpoints"`
	DatabaseName                     *string                                `json:"DatabaseName"`
	DbClusterIdentifier              *string                                `json:"DbClusterIdentifier"`
	DbClusterMembers                 []AwsRdsDbClusterMember                `json:"DbClusterMembers"`
	DbClusterOptionGroupMemberships  []AwsRdsDbClusterOptionGroupMembership `json:"DbClusterOptionGroupMemberships"`
	DbClusterParameterGroup          *string                                `json:"DbClusterParameterGroup"`
	DbClusterResourceID              *string                                `json:"DbClusterResourceId"`
	DbSubnetGroup                    *string                                `json:"DbSubnetGroup"`
	DeletionProtection               *bool                                  `json:"DeletionProtection"`
	DomainMemberships                []AwsRdsDbDomainMembership             `json:"DomainMemberships"`
	EnabledCloudWatchLogsExports     []string                               `json:"EnabledCloudWatchLogsExports"`
	Endpoint                         *string                                `json:"Endpoint"`
	Engine                           *string                                `json:"Engine"`
	EngineMode                       *string                                `json:"EngineMode"`
	EngineVersion                    *string                                `json:"EngineVersion"`
	HostedZoneID                     *string                                `json:"HostedZoneId"`
	HTTPEndpointEnabled              *bool                                  `json:"HttpEndpointEnabled"`
	IamDatabaseAuthenticationEnabled *bool                                  `json:"IamDatabaseAuthenticationEnabled"`
	KmsKeyID                         *string                                `json:"KmsKeyId"`
	MasterUsername                   *string                                `json:"MasterUsername"`
	MultiAz                          *bool                                  `json:"MultiAz"`
	Port                             *int64                                 `json:"Port"`
	PreferredBackupWindow            *string                                `json:"PreferredBackupWindow"`
	PreferredMaintenanceWindow       *string                                `json:"PreferredMaintenanceWindow"`
	ReadReplicaIdentifiers           []string                               `json:"ReadReplicaIdentifiers"`
	ReaderEndpoint                   *string                                `json:"ReaderEndpoint"`
	Status                           *string                                `json:"Status"`
	StorageEncrypted                 *bool                                  `json:"StorageEncrypted"`
	VpcSecurityGroups                []AwsRdsDbInstanceVpcSecurityGroup     `json:"VpcSecurityGroups"`
}
