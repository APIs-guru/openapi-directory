package shared

import (
"time")

type DatasetSummary struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    DatasetArn *string `json:"datasetArn,omitempty"`
    DatasetType *string `json:"datasetType,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

