package shared

import (
	"time"
)

type TrainingJobSummary struct {
	CreationTime      time.Time             `json:"CreationTime"`
	LastModifiedTime  *time.Time            `json:"LastModifiedTime"`
	TrainingEndTime   *time.Time            `json:"TrainingEndTime"`
	TrainingJobArn    string                `json:"TrainingJobArn"`
	TrainingJobName   string                `json:"TrainingJobName"`
	TrainingJobStatus TrainingJobStatusEnum `json:"TrainingJobStatus"`
}
