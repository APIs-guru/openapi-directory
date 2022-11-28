package shared

import (
	"time"
)

// DatasetExportJob
// <p>Describes a job that exports a dataset to an Amazon S3 bucket. For more information, see <a>CreateDatasetExportJob</a>.</p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
type DatasetExportJob struct {
	CreationDateTime    *time.Time              `json:"creationDateTime,omitempty"`
	DatasetArn          *string                 `json:"datasetArn,omitempty"`
	DatasetExportJobArn *string                 `json:"datasetExportJobArn,omitempty"`
	FailureReason       *string                 `json:"failureReason,omitempty"`
	IngestionMode       *IngestionModeEnum      `json:"ingestionMode,omitempty"`
	JobName             *string                 `json:"jobName,omitempty"`
	JobOutput           *DatasetExportJobOutput `json:"jobOutput,omitempty"`
	LastUpdatedDateTime *time.Time              `json:"lastUpdatedDateTime,omitempty"`
	RoleArn             *string                 `json:"roleArn,omitempty"`
	Status              *string                 `json:"status,omitempty"`
}
