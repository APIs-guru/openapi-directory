package shared

import (
	"time"
)

type DbInstance struct {
	AllocatedStorage                      *int64
	AutoMinorVersionUpgrade               *bool
	AvailabilityZone                      *string
	BackupRetentionPeriod                 *int64
	CharacterSetName                      *string
	DbInstanceClass                       *string
	DbInstanceIdentifier                  *string
	DbInstanceStatus                      *string
	DbName                                *string
	DbParameterGroups                     []DbParameterGroupStatus
	DbSecurityGroups                      []DbSecurityGroupMembership
	DbSubnetGroup                         *DbSubnetGroup
	Endpoint                              *Endpoint
	Engine                                *string
	EngineVersion                         *string
	InstanceCreateTime                    *time.Time
	Iops                                  *int64
	LatestRestorableTime                  *time.Time
	LicenseModel                          *string
	MasterUsername                        *string
	MultiAz                               *bool
	OptionGroupMemberships                []OptionGroupMembership
	PendingModifiedValues                 *PendingModifiedValues
	PreferredBackupWindow                 *string
	PreferredMaintenanceWindow            *string
	PubliclyAccessible                    *bool
	ReadReplicaDbInstanceIdentifiers      []string
	ReadReplicaSourceDbInstanceIdentifier *string
	SecondaryAvailabilityZone             *string
	StatusInfos                           []DbInstanceStatusInfo
	VpcSecurityGroups                     []VpcSecurityGroupMembership
}
