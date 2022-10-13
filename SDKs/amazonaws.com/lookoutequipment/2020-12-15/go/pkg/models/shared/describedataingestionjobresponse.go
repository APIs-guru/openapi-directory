package shared

import (
	"time"
)

type DescribeDataIngestionJobResponse struct {
	CreatedAt                   *time.Time                   `json:"CreatedAt"`
	DatasetArn                  *string                      `json:"DatasetArn"`
	FailedReason                *string                      `json:"FailedReason"`
	IngestionInputConfiguration *IngestionInputConfiguration `json:"IngestionInputConfiguration"`
	JobID                       *string                      `json:"JobId"`
	RoleArn                     *string                      `json:"RoleArn"`
	Status                      *IngestionJobStatusEnum      `json:"Status"`
}
