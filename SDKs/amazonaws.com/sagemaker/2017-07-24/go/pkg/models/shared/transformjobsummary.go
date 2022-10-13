package shared

import (
	"time"
)

type TransformJobSummary struct {
	CreationTime       time.Time              `json:"CreationTime"`
	FailureReason      *string                `json:"FailureReason"`
	LastModifiedTime   *time.Time             `json:"LastModifiedTime"`
	TransformEndTime   *time.Time             `json:"TransformEndTime"`
	TransformJobArn    string                 `json:"TransformJobArn"`
	TransformJobName   string                 `json:"TransformJobName"`
	TransformJobStatus TransformJobStatusEnum `json:"TransformJobStatus"`
}
