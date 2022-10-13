package shared

import (
	"time"
)

type GetBatchPredictionOutput struct {
	BatchPredictionDataSourceID *string           `json:"BatchPredictionDataSourceId"`
	BatchPredictionID           *string           `json:"BatchPredictionId"`
	ComputeTime                 *int64            `json:"ComputeTime"`
	CreatedAt                   *time.Time        `json:"CreatedAt"`
	CreatedByIamUser            *string           `json:"CreatedByIamUser"`
	FinishedAt                  *time.Time        `json:"FinishedAt"`
	InputDataLocationS3         *string           `json:"InputDataLocationS3"`
	InvalidRecordCount          *int64            `json:"InvalidRecordCount"`
	LastUpdatedAt               *time.Time        `json:"LastUpdatedAt"`
	LogURI                      *string           `json:"LogUri"`
	MlModelID                   *string           `json:"MLModelId"`
	Message                     *string           `json:"Message"`
	Name                        *string           `json:"Name"`
	OutputURI                   *string           `json:"OutputUri"`
	StartedAt                   *time.Time        `json:"StartedAt"`
	Status                      *EntityStatusEnum `json:"Status"`
	TotalRecordCount            *int64            `json:"TotalRecordCount"`
}
