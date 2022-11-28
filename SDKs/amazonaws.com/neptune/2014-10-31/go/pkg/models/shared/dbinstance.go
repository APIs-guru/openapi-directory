package shared

import (
	"time"
)

// DbInstance
// <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
type DbInstance struct {
	AllocatedStorage                      *int64
	AutoMinorVersionUpgrade               *bool
	AvailabilityZone                      *string
	BackupRetentionPeriod                 *int64
	CaCertificateIdentifier               *string
	CharacterSetName                      *string
	CopyTagsToSnapshot                    *bool
	DbClusterIdentifier                   *string
	DbInstanceArn                         *string
	DbInstanceClass                       *string
	DbInstanceIdentifier                  *string
	DbInstanceStatus                      *string
	DbName                                *string
	DbParameterGroups                     []DbParameterGroupStatus
	DbSecurityGroups                      []DbSecurityGroupMembership
	DbSubnetGroup                         *DbSubnetGroup
	DbInstancePort                        *int64
	DbiResourceID                         *string
	DeletionProtection                    *bool
	DomainMemberships                     []DomainMembership
	EnabledCloudwatchLogsExports          []string
	Endpoint                              *Endpoint
	Engine                                *string
	EngineVersion                         *string
	EnhancedMonitoringResourceArn         *string
	IamDatabaseAuthenticationEnabled      *bool
	InstanceCreateTime                    *time.Time
	Iops                                  *int64
	KmsKeyID                              *string
	LatestRestorableTime                  *time.Time
	LicenseModel                          *string
	MasterUsername                        *string
	MonitoringInterval                    *int64
	MonitoringRoleArn                     *string
	MultiAz                               *bool
	OptionGroupMemberships                []OptionGroupMembership
	PendingModifiedValues                 *PendingModifiedValues
	PerformanceInsightsEnabled            *bool
	PerformanceInsightsKmsKeyID           *string
	PreferredBackupWindow                 *string
	PreferredMaintenanceWindow            *string
	PromotionTier                         *int64
	PubliclyAccessible                    *bool
	ReadReplicaDbClusterIdentifiers       []string
	ReadReplicaDbInstanceIdentifiers      []string
	ReadReplicaSourceDbInstanceIdentifier *string
	SecondaryAvailabilityZone             *string
	StatusInfos                           []DbInstanceStatusInfo
	StorageEncrypted                      *bool
	StorageType                           *string
	TdeCredentialArn                      *string
	Timezone                              *string
	VpcSecurityGroups                     []VpcSecurityGroupMembership
}
