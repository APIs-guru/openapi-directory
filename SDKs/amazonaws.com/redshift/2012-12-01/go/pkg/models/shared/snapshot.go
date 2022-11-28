package shared

import (
	"time"
)

// Snapshot
// Describes a snapshot.
type Snapshot struct {
	AccountsWithRestoreAccess              []AccountWithRestoreAccess
	ActualIncrementalBackupSizeInMegaBytes *float64
	AvailabilityZone                       *string
	BackupProgressInMegaBytes              *float64
	ClusterCreateTime                      *time.Time
	ClusterIdentifier                      *string
	ClusterVersion                         *string
	CurrentBackupRateInMegaBytesPerSecond  *float64
	DbName                                 *string
	ElapsedTimeInSeconds                   *int64
	Encrypted                              *bool
	EncryptedWithHsm                       *bool
	EngineFullVersion                      *string
	EnhancedVpcRouting                     *bool
	EstimatedSecondsToCompletion           *int64
	KmsKeyID                               *string
	MaintenanceTrackName                   *string
	ManualSnapshotRemainingDays            *int64
	ManualSnapshotRetentionPeriod          *int64
	MasterUsername                         *string
	NodeType                               *string
	NumberOfNodes                          *int64
	OwnerAccount                           *string
	Port                                   *int64
	RestorableNodeTypes                    []string
	SnapshotCreateTime                     *time.Time
	SnapshotIdentifier                     *string
	SnapshotRetentionStartTime             *time.Time
	SnapshotType                           *string
	SourceRegion                           *string
	Status                                 *string
	Tags                                   []Tag
	TotalBackupSizeInMegaBytes             *float64
	VpcID                                  *string
}
