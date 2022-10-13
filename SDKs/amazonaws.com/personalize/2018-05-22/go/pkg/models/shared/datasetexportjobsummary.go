package shared

import (
	"time"
)

type DatasetExportJobSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime"`
	DatasetExportJobArn *string    `json:"datasetExportJobArn"`
	FailureReason       *string    `json:"failureReason"`
	JobName             *string    `json:"jobName"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Status              *string    `json:"status"`
}
