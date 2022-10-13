package shared

import (
	"time"
)

type DatasetSummary struct {
	CreatedAt   *time.Time         `json:"CreatedAt"`
	DatasetArn  *string            `json:"DatasetArn"`
	DatasetName *string            `json:"DatasetName"`
	Status      *DatasetStatusEnum `json:"Status"`
}
