package shared

import (
	"time"
)

// DbCluster
// <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
type DbCluster struct {
	AllocatedStorage                 *int64
	AssociatedRoles                  []DbClusterRole
	AutomaticRestartTime             *time.Time
	AvailabilityZones                []string
	BackupRetentionPeriod            *int64
	CharacterSetName                 *string
	CloneGroupID                     *string
	ClusterCreateTime                *time.Time
	CopyTagsToSnapshot               *bool
	CrossAccountClone                *bool
	DbClusterArn                     *string
	DbClusterIdentifier              *string
	DbClusterMembers                 []DbClusterMember
	DbClusterOptionGroupMemberships  []DbClusterOptionGroupStatus
	DbClusterParameterGroup          *string
	DbSubnetGroup                    *string
	DatabaseName                     *string
	DbClusterResourceID              *string
	DeletionProtection               *bool
	EarliestRestorableTime           *time.Time
	EnabledCloudwatchLogsExports     []string
	Endpoint                         *string
	Engine                           *string
	EngineVersion                    *string
	HostedZoneID                     *string
	IamDatabaseAuthenticationEnabled *bool
	KmsKeyID                         *string
	LatestRestorableTime             *time.Time
	MasterUsername                   *string
	MultiAz                          *bool
	PercentProgress                  *string
	Port                             *int64
	PreferredBackupWindow            *string
	PreferredMaintenanceWindow       *string
	ReadReplicaIdentifiers           []string
	ReaderEndpoint                   *string
	ReplicationSourceIdentifier      *string
	Status                           *string
	StorageEncrypted                 *bool
	VpcSecurityGroups                []VpcSecurityGroupMembership
}
