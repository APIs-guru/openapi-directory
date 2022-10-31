package shared

import (
"time")

type DatasetGroupSummary struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    DatasetGroupArn *string `json:"datasetGroupArn,omitempty"`
    FailureReason *string `json:"failureReason,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

