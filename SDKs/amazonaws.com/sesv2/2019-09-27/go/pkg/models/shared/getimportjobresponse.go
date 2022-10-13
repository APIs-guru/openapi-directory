package shared

import (
	"time"
)

type GetImportJobResponse struct {
	CompletedTimestamp    *time.Time         `json:"CompletedTimestamp"`
	CreatedTimestamp      *time.Time         `json:"CreatedTimestamp"`
	FailedRecordsCount    *int64             `json:"FailedRecordsCount"`
	FailureInfo           *FailureInfo       `json:"FailureInfo"`
	ImportDataSource      *ImportDataSource  `json:"ImportDataSource"`
	ImportDestination     *ImportDestination `json:"ImportDestination"`
	JobID                 *string            `json:"JobId"`
	JobStatus             *JobStatusEnum     `json:"JobStatus"`
	ProcessedRecordsCount *int64             `json:"ProcessedRecordsCount"`
}
