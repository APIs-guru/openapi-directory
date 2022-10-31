package shared

import (
"time")

type MailboxExportJob struct {
    Description *string `json:"Description,omitempty"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    EntityID *string `json:"EntityId,omitempty"`
    EstimatedProgress *int64 `json:"EstimatedProgress,omitempty"`
    JobID *string `json:"JobId,omitempty"`
    S3BucketName *string `json:"S3BucketName,omitempty"`
    S3Path *string `json:"S3Path,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    State *MailboxExportJobStateEnum `json:"State,omitempty"`
    
}

