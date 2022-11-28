package shared

import (
	"time"
)

// TableRestoreStatus
// Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation.
type TableRestoreStatus struct {
	ClusterIdentifier     *string
	Message               *string
	NewTableName          *string
	ProgressInMegaBytes   *int64
	RequestTime           *time.Time
	SnapshotIdentifier    *string
	SourceDatabaseName    *string
	SourceSchemaName      *string
	SourceTableName       *string
	Status                *TableRestoreStatusTypeEnum
	TableRestoreRequestID *string
	TargetDatabaseName    *string
	TargetSchemaName      *string
	TotalDataInMegaBytes  *int64
}
