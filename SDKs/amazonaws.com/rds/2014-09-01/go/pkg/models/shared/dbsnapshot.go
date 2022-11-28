package shared

import (
	"time"
)

type DbSnapshot struct {
	AllocatedStorage     *int64
	AvailabilityZone     *string
	DbInstanceIdentifier *string
	DbSnapshotIdentifier *string
	Engine               *string
	EngineVersion        *string
	InstanceCreateTime   *time.Time
	Iops                 *int64
	LicenseModel         *string
	MasterUsername       *string
	OptionGroupName      *string
	PercentProgress      *int64
	Port                 *int64
	SnapshotCreateTime   *time.Time
	SnapshotType         *string
	SourceRegion         *string
	Status               *string
	StorageType          *string
	TdeCredentialArn     *string
	VpcID                *string
}
