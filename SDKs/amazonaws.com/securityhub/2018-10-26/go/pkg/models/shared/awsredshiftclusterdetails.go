package shared

type AwsRedshiftClusterDetails struct {
	AllowVersionUpgrade                    *bool                                         `json:"AllowVersionUpgrade"`
	AutomatedSnapshotRetentionPeriod       *int64                                        `json:"AutomatedSnapshotRetentionPeriod"`
	AvailabilityZone                       *string                                       `json:"AvailabilityZone"`
	ClusterAvailabilityStatus              *string                                       `json:"ClusterAvailabilityStatus"`
	ClusterCreateTime                      *string                                       `json:"ClusterCreateTime"`
	ClusterIdentifier                      *string                                       `json:"ClusterIdentifier"`
	ClusterNodes                           []AwsRedshiftClusterClusterNode               `json:"ClusterNodes"`
	ClusterParameterGroups                 []AwsRedshiftClusterClusterParameterGroup     `json:"ClusterParameterGroups"`
	ClusterPublicKey                       *string                                       `json:"ClusterPublicKey"`
	ClusterRevisionNumber                  *string                                       `json:"ClusterRevisionNumber"`
	ClusterSecurityGroups                  []AwsRedshiftClusterClusterSecurityGroup      `json:"ClusterSecurityGroups"`
	ClusterSnapshotCopyStatus              *AwsRedshiftClusterClusterSnapshotCopyStatus  `json:"ClusterSnapshotCopyStatus"`
	ClusterStatus                          *string                                       `json:"ClusterStatus"`
	ClusterSubnetGroupName                 *string                                       `json:"ClusterSubnetGroupName"`
	ClusterVersion                         *string                                       `json:"ClusterVersion"`
	DbName                                 *string                                       `json:"DBName"`
	DeferredMaintenanceWindows             []AwsRedshiftClusterDeferredMaintenanceWindow `json:"DeferredMaintenanceWindows"`
	ElasticIPStatus                        *AwsRedshiftClusterElasticIPStatus            `json:"ElasticIpStatus"`
	ElasticResizeNumberOfNodeOptions       *string                                       `json:"ElasticResizeNumberOfNodeOptions"`
	Encrypted                              *bool                                         `json:"Encrypted"`
	Endpoint                               *AwsRedshiftClusterEndpoint                   `json:"Endpoint"`
	EnhancedVpcRouting                     *bool                                         `json:"EnhancedVpcRouting"`
	ExpectedNextSnapshotScheduleTime       *string                                       `json:"ExpectedNextSnapshotScheduleTime"`
	ExpectedNextSnapshotScheduleTimeStatus *string                                       `json:"ExpectedNextSnapshotScheduleTimeStatus"`
	HsmStatus                              *AwsRedshiftClusterHsmStatus                  `json:"HsmStatus"`
	IamRoles                               []AwsRedshiftClusterIamRole                   `json:"IamRoles"`
	KmsKeyID                               *string                                       `json:"KmsKeyId"`
	MaintenanceTrackName                   *string                                       `json:"MaintenanceTrackName"`
	ManualSnapshotRetentionPeriod          *int64                                        `json:"ManualSnapshotRetentionPeriod"`
	MasterUsername                         *string                                       `json:"MasterUsername"`
	NextMaintenanceWindowStartTime         *string                                       `json:"NextMaintenanceWindowStartTime"`
	NodeType                               *string                                       `json:"NodeType"`
	NumberOfNodes                          *int64                                        `json:"NumberOfNodes"`
	PendingActions                         []string                                      `json:"PendingActions"`
	PendingModifiedValues                  *AwsRedshiftClusterPendingModifiedValues      `json:"PendingModifiedValues"`
	PreferredMaintenanceWindow             *string                                       `json:"PreferredMaintenanceWindow"`
	PubliclyAccessible                     *bool                                         `json:"PubliclyAccessible"`
	ResizeInfo                             *AwsRedshiftClusterResizeInfo                 `json:"ResizeInfo"`
	RestoreStatus                          *AwsRedshiftClusterRestoreStatus              `json:"RestoreStatus"`
	SnapshotScheduleIdentifier             *string                                       `json:"SnapshotScheduleIdentifier"`
	SnapshotScheduleState                  *string                                       `json:"SnapshotScheduleState"`
	VpcID                                  *string                                       `json:"VpcId"`
	VpcSecurityGroups                      []AwsRedshiftClusterVpcSecurityGroup          `json:"VpcSecurityGroups"`
}
