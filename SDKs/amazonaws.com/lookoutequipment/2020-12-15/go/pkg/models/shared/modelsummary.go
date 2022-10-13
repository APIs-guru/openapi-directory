package shared

import (
	"time"
)

type ModelSummary struct {
	CreatedAt   *time.Time       `json:"CreatedAt"`
	DatasetArn  *string          `json:"DatasetArn"`
	DatasetName *string          `json:"DatasetName"`
	ModelArn    *string          `json:"ModelArn"`
	ModelName   *string          `json:"ModelName"`
	Status      *ModelStatusEnum `json:"Status"`
}
