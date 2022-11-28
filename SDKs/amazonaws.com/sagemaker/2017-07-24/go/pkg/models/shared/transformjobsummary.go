package shared

import (
	"time"
)

// TransformJobSummary
// Provides a summary of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a list after in response to a <a>ListTransformJobs</a> call.
type TransformJobSummary struct {
	CreationTime       time.Time              `json:"CreationTime"`
	FailureReason      *string                `json:"FailureReason,omitempty"`
	LastModifiedTime   *time.Time             `json:"LastModifiedTime,omitempty"`
	TransformEndTime   *time.Time             `json:"TransformEndTime,omitempty"`
	TransformJobArn    string                 `json:"TransformJobArn"`
	TransformJobName   string                 `json:"TransformJobName"`
	TransformJobStatus TransformJobStatusEnum `json:"TransformJobStatus"`
}
