package shared

import (
	"time"
)

// DatasetSummary
// Contains information about the specific data set, including name, ARN, and status.
type DatasetSummary struct {
	CreatedAt   *time.Time         `json:"CreatedAt,omitempty"`
	DatasetArn  *string            `json:"DatasetArn,omitempty"`
	DatasetName *string            `json:"DatasetName,omitempty"`
	Status      *DatasetStatusEnum `json:"Status,omitempty"`
}
