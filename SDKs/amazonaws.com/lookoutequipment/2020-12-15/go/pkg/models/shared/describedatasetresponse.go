package shared

import (
"time")

type DescribeDatasetResponse struct {
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    DatasetArn *string `json:"DatasetArn,omitempty"`
    DatasetName *string `json:"DatasetName,omitempty"`
    IngestionInputConfiguration *IngestionInputConfiguration `json:"IngestionInputConfiguration,omitempty"`
    LastUpdatedAt *time.Time `json:"LastUpdatedAt,omitempty"`
    Schema *string `json:"Schema,omitempty"`
    ServerSideKmsKeyID *string `json:"ServerSideKmsKeyId,omitempty"`
    Status *DatasetStatusEnum `json:"Status,omitempty"`
    
}

