package shared

import (
"time")

type DatasetSummary struct {
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    DatasetArn *string `json:"DatasetArn,omitempty"`
    DatasetName *string `json:"DatasetName,omitempty"`
    Status *DatasetStatusEnum `json:"Status,omitempty"`
    
}

