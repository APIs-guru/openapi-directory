package shared

import (
	"time"
)

// DbSnapshot
// <p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p>
type DbSnapshot struct {
	AllocatedStorage                 *int64
	AvailabilityZone                 *string
	DbInstanceIdentifier             *string
	DbSnapshotArn                    *string
	DbSnapshotIdentifier             *string
	DbiResourceID                    *string
	Encrypted                        *bool
	Engine                           *string
	EngineVersion                    *string
	IamDatabaseAuthenticationEnabled *bool
	InstanceCreateTime               *time.Time
	Iops                             *int64
	KmsKeyID                         *string
	LicenseModel                     *string
	MasterUsername                   *string
	OptionGroupName                  *string
	OriginalSnapshotCreateTime       *time.Time
	PercentProgress                  *int64
	Port                             *int64
	ProcessorFeatures                []ProcessorFeature
	SnapshotCreateTime               *time.Time
	SnapshotType                     *string
	SourceDbSnapshotIdentifier       *string
	SourceRegion                     *string
	Status                           *string
	StorageType                      *string
	TagList                          []Tag
	TdeCredentialArn                 *string
	Timezone                         *string
	VpcID                            *string
}
