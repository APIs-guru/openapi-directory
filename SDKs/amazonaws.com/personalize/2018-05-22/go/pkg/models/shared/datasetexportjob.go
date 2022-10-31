package shared

import (
	"time"
)

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
