package shared

import (
	"time"
)

type TransformJobSummary struct {
	CreationTime       time.Time              `json:"CreationTime"`
	FailureReason      *string                `json:"FailureReason,omitempty"`
	LastModifiedTime   *time.Time             `json:"LastModifiedTime,omitempty"`
	TransformEndTime   *time.Time             `json:"TransformEndTime,omitempty"`
	TransformJobArn    string                 `json:"TransformJobArn"`
	TransformJobName   string                 `json:"TransformJobName"`
	TransformJobStatus TransformJobStatusEnum `json:"TransformJobStatus"`
}
