package shared

import (
	"time"
)

// ExportTask
// <p>Contains the details of a snapshot export to Amazon S3. </p> <p>This data type is used as a response element in the <code>DescribeExportTasks</code> action. </p>
type ExportTask struct {
	ExportOnly             []string
	ExportTaskIdentifier   *string
	FailureCause           *string
	IamRoleArn             *string
	KmsKeyID               *string
	PercentProgress        *int64
	S3Bucket               *string
	S3Prefix               *string
	SnapshotTime           *time.Time
	SourceArn              *string
	Status                 *string
	TaskEndTime            *time.Time
	TaskStartTime          *time.Time
	TotalExtractedDataInGb *int64
	WarningMessage         *string
}
