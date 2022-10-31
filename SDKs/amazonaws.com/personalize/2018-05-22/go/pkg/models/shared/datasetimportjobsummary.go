package shared

import (
"time")

type DatasetImportJobSummary struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    DatasetImportJobArn *string `json:"datasetImportJobArn,omitempty"`
    FailureReason *string `json:"failureReason,omitempty"`
    JobName *string `json:"jobName,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

