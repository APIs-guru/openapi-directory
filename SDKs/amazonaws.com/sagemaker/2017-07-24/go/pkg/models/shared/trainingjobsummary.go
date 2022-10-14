package shared

import (
	"time"
)

type TrainingJobSummary struct {
	CreationTime      time.Time             `json:"CreationTime"`
	LastModifiedTime  *time.Time            `json:"LastModifiedTime,omitempty"`
	TrainingEndTime   *time.Time            `json:"TrainingEndTime,omitempty"`
	TrainingJobArn    string                `json:"TrainingJobArn"`
	TrainingJobName   string                `json:"TrainingJobName"`
	TrainingJobStatus TrainingJobStatusEnum `json:"TrainingJobStatus"`
}
