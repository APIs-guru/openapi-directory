package shared

import (
	"time"
)

type MailboxExportJob struct {
	Description       *string                    `json:"Description"`
	EndTime           *time.Time                 `json:"EndTime"`
	EntityID          *string                    `json:"EntityId"`
	EstimatedProgress *int64                     `json:"EstimatedProgress"`
	JobID             *string                    `json:"JobId"`
	S3BucketName      *string                    `json:"S3BucketName"`
	S3Path            *string                    `json:"S3Path"`
	StartTime         *time.Time                 `json:"StartTime"`
	State             *MailboxExportJobStateEnum `json:"State"`
}
