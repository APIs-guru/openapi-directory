package shared

type AwsRedshiftClusterDetails struct {
	AllowVersionUpgrade                    *bool                                         `json:"AllowVersionUpgrade,omitempty"`
	AutomatedSnapshotRetentionPeriod       *int64                                        `json:"AutomatedSnapshotRetentionPeriod,omitempty"`
	AvailabilityZone                       *string                                       `json:"AvailabilityZone,omitempty"`
	ClusterAvailabilityStatus              *string                                       `json:"ClusterAvailabilityStatus,omitempty"`
	ClusterCreateTime                      *string                                       `json:"ClusterCreateTime,omitempty"`
	ClusterIdentifier                      *string                                       `json:"ClusterIdentifier,omitempty"`
	ClusterNodes                           []AwsRedshiftClusterClusterNode               `json:"ClusterNodes,omitempty"`
	ClusterParameterGroups                 []AwsRedshiftClusterClusterParameterGroup     `json:"ClusterParameterGroups,omitempty"`
	ClusterPublicKey                       *string                                       `json:"ClusterPublicKey,omitempty"`
	ClusterRevisionNumber                  *string                                       `json:"ClusterRevisionNumber,omitempty"`
	ClusterSecurityGroups                  []AwsRedshiftClusterClusterSecurityGroup      `json:"ClusterSecurityGroups,omitempty"`
	ClusterSnapshotCopyStatus              *AwsRedshiftClusterClusterSnapshotCopyStatus  `json:"ClusterSnapshotCopyStatus,omitempty"`
	ClusterStatus                          *string                                       `json:"ClusterStatus,omitempty"`
	ClusterSubnetGroupName                 *string                                       `json:"ClusterSubnetGroupName,omitempty"`
	ClusterVersion                         *string                                       `json:"ClusterVersion,omitempty"`
	DbName                                 *string                                       `json:"DBName,omitempty"`
	DeferredMaintenanceWindows             []AwsRedshiftClusterDeferredMaintenanceWindow `json:"DeferredMaintenanceWindows,omitempty"`
	ElasticIPStatus                        *AwsRedshiftClusterElasticIPStatus            `json:"ElasticIpStatus,omitempty"`
	ElasticResizeNumberOfNodeOptions       *string                                       `json:"ElasticResizeNumberOfNodeOptions,omitempty"`
	Encrypted                              *bool                                         `json:"Encrypted,omitempty"`
	Endpoint                               *AwsRedshiftClusterEndpoint                   `json:"Endpoint,omitempty"`
	EnhancedVpcRouting                     *bool                                         `json:"EnhancedVpcRouting,omitempty"`
	ExpectedNextSnapshotScheduleTime       *string                                       `json:"ExpectedNextSnapshotScheduleTime,omitempty"`
	ExpectedNextSnapshotScheduleTimeStatus *string                                       `json:"ExpectedNextSnapshotScheduleTimeStatus,omitempty"`
	HsmStatus                              *AwsRedshiftClusterHsmStatus                  `json:"HsmStatus,omitempty"`
	IamRoles                               []AwsRedshiftClusterIamRole                   `json:"IamRoles,omitempty"`
	KmsKeyID                               *string                                       `json:"KmsKeyId,omitempty"`
	MaintenanceTrackName                   *string                                       `json:"MaintenanceTrackName,omitempty"`
	ManualSnapshotRetentionPeriod          *int64                                        `json:"ManualSnapshotRetentionPeriod,omitempty"`
	MasterUsername                         *string                                       `json:"MasterUsername,omitempty"`
	NextMaintenanceWindowStartTime         *string                                       `json:"NextMaintenanceWindowStartTime,omitempty"`
	NodeType                               *string                                       `json:"NodeType,omitempty"`
	NumberOfNodes                          *int64                                        `json:"NumberOfNodes,omitempty"`
	PendingActions                         []string                                      `json:"PendingActions,omitempty"`
	PendingModifiedValues                  *AwsRedshiftClusterPendingModifiedValues      `json:"PendingModifiedValues,omitempty"`
	PreferredMaintenanceWindow             *string                                       `json:"PreferredMaintenanceWindow,omitempty"`
	PubliclyAccessible                     *bool                                         `json:"PubliclyAccessible,omitempty"`
	ResizeInfo                             *AwsRedshiftClusterResizeInfo                 `json:"ResizeInfo,omitempty"`
	RestoreStatus                          *AwsRedshiftClusterRestoreStatus              `json:"RestoreStatus,omitempty"`
	SnapshotScheduleIdentifier             *string                                       `json:"SnapshotScheduleIdentifier,omitempty"`
	SnapshotScheduleState                  *string                                       `json:"SnapshotScheduleState,omitempty"`
	VpcID                                  *string                                       `json:"VpcId,omitempty"`
	VpcSecurityGroups                      []AwsRedshiftClusterVpcSecurityGroup          `json:"VpcSecurityGroups,omitempty"`
}
