package shared

import (
	"time"
)

type DescribeDatasetResponse struct {
	CreatedAt                   *time.Time                   `json:"CreatedAt"`
	DatasetArn                  *string                      `json:"DatasetArn"`
	DatasetName                 *string                      `json:"DatasetName"`
	IngestionInputConfiguration *IngestionInputConfiguration `json:"IngestionInputConfiguration"`
	LastUpdatedAt               *time.Time                   `json:"LastUpdatedAt"`
	Schema                      *string                      `json:"Schema"`
	ServerSideKmsKeyID          *string                      `json:"ServerSideKmsKeyId"`
	Status                      *DatasetStatusEnum           `json:"Status"`
}
