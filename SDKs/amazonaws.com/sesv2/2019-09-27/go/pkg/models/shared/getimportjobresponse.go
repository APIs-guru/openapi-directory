package shared

import (
	"time"
)

type GetImportJobResponse struct {
	CompletedTimestamp    *time.Time         `json:"CompletedTimestamp,omitempty"`
	CreatedTimestamp      *time.Time         `json:"CreatedTimestamp,omitempty"`
	FailedRecordsCount    *int64             `json:"FailedRecordsCount,omitempty"`
	FailureInfo           *FailureInfo       `json:"FailureInfo,omitempty"`
	ImportDataSource      *ImportDataSource  `json:"ImportDataSource,omitempty"`
	ImportDestination     *ImportDestination `json:"ImportDestination,omitempty"`
	JobID                 *string            `json:"JobId,omitempty"`
	JobStatus             *JobStatusEnum     `json:"JobStatus,omitempty"`
	ProcessedRecordsCount *int64             `json:"ProcessedRecordsCount,omitempty"`
}
