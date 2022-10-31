package shared

import (
	"time"
)

type DescribeDataIngestionJobResponse struct {
	CreatedAt                   *time.Time                   `json:"CreatedAt,omitempty"`
	DatasetArn                  *string                      `json:"DatasetArn,omitempty"`
	FailedReason                *string                      `json:"FailedReason,omitempty"`
	IngestionInputConfiguration *IngestionInputConfiguration `json:"IngestionInputConfiguration,omitempty"`
	JobID                       *string                      `json:"JobId,omitempty"`
	RoleArn                     *string                      `json:"RoleArn,omitempty"`
	Status                      *IngestionJobStatusEnum      `json:"Status,omitempty"`
}
