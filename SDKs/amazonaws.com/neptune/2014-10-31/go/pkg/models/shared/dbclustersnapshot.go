package shared

import (
	"time"
)

// DbClusterSnapshot
// <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
type DbClusterSnapshot struct {
	AllocatedStorage                 *int64
	AvailabilityZones                []string
	ClusterCreateTime                *time.Time
	DbClusterIdentifier              *string
	DbClusterSnapshotArn             *string
	DbClusterSnapshotIdentifier      *string
	Engine                           *string
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
	VpcID                            *string
}
