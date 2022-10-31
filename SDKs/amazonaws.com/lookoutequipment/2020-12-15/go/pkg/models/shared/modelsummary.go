package shared

import (
	"time"
)

type ModelSummary struct {
	CreatedAt   *time.Time       `json:"CreatedAt,omitempty"`
	DatasetArn  *string          `json:"DatasetArn,omitempty"`
	DatasetName *string          `json:"DatasetName,omitempty"`
	ModelArn    *string          `json:"ModelArn,omitempty"`
	ModelName   *string          `json:"ModelName,omitempty"`
	Status      *ModelStatusEnum `json:"Status,omitempty"`
}
