package shared

import (
"time")

type DatasetExportJobSummary struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    DatasetExportJobArn *string `json:"datasetExportJobArn,omitempty"`
    FailureReason *string `json:"failureReason,omitempty"`
    JobName *string `json:"jobName,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

