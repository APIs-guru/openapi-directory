package shared

import (
	"time"
)

// DbClusterSnapshot
// <p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action. </p>
type DbClusterSnapshot struct {
	AllocatedStorage                 *int64
	AvailabilityZones                []string
	ClusterCreateTime                *time.Time
	DbClusterIdentifier              *string
	DbClusterSnapshotArn             *string
	DbClusterSnapshotIdentifier      *string
	Engine                           *string
	EngineMode                       *string
	EngineVersion                    *string
	IamDatabaseAuthenticationEnabled *bool
	KmsKeyID                         *string
	LicenseModel                     *string
	MasterUsername                   *string
	PercentProgress                  *int64
	Port                             *int64
	SnapshotCreateTime               *time.Time
	SnapshotType                     *string
	SourceDbClusterSnapshotArn       *string
	Status                           *string
	StorageEncrypted                 *bool
	TagList                          []Tag
	VpcID                            *string
}
