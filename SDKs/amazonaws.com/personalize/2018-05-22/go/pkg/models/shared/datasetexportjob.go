package shared

import (
	"time"
)

type DatasetExportJob struct {
	CreationDateTime    *time.Time              `json:"creationDateTime"`
	DatasetArn          *string                 `json:"datasetArn"`
	DatasetExportJobArn *string                 `json:"datasetExportJobArn"`
	FailureReason       *string                 `json:"failureReason"`
	IngestionMode       *IngestionModeEnum      `json:"ingestionMode"`
	JobName             *string                 `json:"jobName"`
	JobOutput           *DatasetExportJobOutput `json:"jobOutput"`
	LastUpdatedDateTime *time.Time              `json:"lastUpdatedDateTime"`
	RoleArn             *string                 `json:"roleArn"`
	Status              *string                 `json:"status"`
}
