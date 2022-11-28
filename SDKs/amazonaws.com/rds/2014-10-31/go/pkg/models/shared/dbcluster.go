package shared

import (
	"time"
)

// DbCluster
// <p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p>
type DbCluster struct {
	ActivityStreamKinesisStreamName  *string
	ActivityStreamKmsKeyID           *string
	ActivityStreamMode               *ActivityStreamModeEnum
	ActivityStreamStatus             *ActivityStreamStatusEnum
	AllocatedStorage                 *int64
	AssociatedRoles                  []DbClusterRole
	AutomaticRestartTime             *time.Time
	AvailabilityZones                []string
	BacktrackConsumedChangeRecords   *int64
	BacktrackWindow                  *int64
	BackupRetentionPeriod            *int64
	Capacity                         *int64
	CharacterSetName                 *string
	CloneGroupID                     *string
	ClusterCreateTime                *time.Time
	CopyTagsToSnapshot               *bool
	CrossAccountClone                *bool
	CustomEndpoints                  []string
	DbClusterArn                     *string
	DbClusterIdentifier              *string
	DbClusterMembers                 []DbClusterMember
	DbClusterOptionGroupMemberships  []DbClusterOptionGroupStatus
	DbClusterParameterGroup          *string
	DbSubnetGroup                    *string
	DatabaseName                     *string
	DbClusterResourceID              *string
	DeletionProtection               *bool
	DomainMemberships                []DomainMembership
	EarliestBacktrackTime            *time.Time
	EarliestRestorableTime           *time.Time
	EnabledCloudwatchLogsExports     []string
	Endpoint                         *string
	Engine                           *string
	EngineMode                       *string
	EngineVersion                    *string
	GlobalWriteForwardingRequested   *bool
	GlobalWriteForwardingStatus      *WriteForwardingStatusEnum
	HostedZoneID                     *string
	HTTPEndpointEnabled              *bool
	IamDatabaseAuthenticationEnabled *bool
	KmsKeyID                         *string
	LatestRestorableTime             *time.Time
	MasterUsername                   *string
	MultiAz                          *bool
	PendingModifiedValues            *ClusterPendingModifiedValues
	PercentProgress                  *string
	Port                             *int64
	PreferredBackupWindow            *string
	PreferredMaintenanceWindow       *string
	ReadReplicaIdentifiers           []string
	ReaderEndpoint                   *string
	ReplicationSourceIdentifier      *string
	ScalingConfigurationInfo         *ScalingConfigurationInfo
	Status                           *string
	StorageEncrypted                 *bool
	TagList                          []Tag
	VpcSecurityGroups                []VpcSecurityGroupMembership
}
