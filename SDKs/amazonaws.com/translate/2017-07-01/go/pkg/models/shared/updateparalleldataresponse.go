package shared

import (
	"time"
)

type UpdateParallelDataResponse struct {
	LatestUpdateAttemptAt     *time.Time              `json:"LatestUpdateAttemptAt"`
	LatestUpdateAttemptStatus *ParallelDataStatusEnum `json:"LatestUpdateAttemptStatus"`
	Name                      *string                 `json:"Name"`
	Status                    *ParallelDataStatusEnum `json:"Status"`
}
