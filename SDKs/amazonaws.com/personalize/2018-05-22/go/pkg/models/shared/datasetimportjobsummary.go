package shared

import (
	"time"
)

type DatasetImportJobSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime"`
	DatasetImportJobArn *string    `json:"datasetImportJobArn"`
	FailureReason       *string    `json:"failureReason"`
	JobName             *string    `json:"jobName"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Status              *string    `json:"status"`
}
