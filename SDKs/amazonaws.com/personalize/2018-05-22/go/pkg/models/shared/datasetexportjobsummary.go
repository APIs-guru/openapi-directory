package shared

import (
	"time"
)

// DatasetExportJobSummary
// Provides a summary of the properties of a dataset export job. For a complete listing, call the <a>DescribeDatasetExportJob</a> API.
type DatasetExportJobSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	DatasetExportJobArn *string    `json:"datasetExportJobArn,omitempty"`
	FailureReason       *string    `json:"failureReason,omitempty"`
	JobName             *string    `json:"jobName,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Status              *string    `json:"status,omitempty"`
}
