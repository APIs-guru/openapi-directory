package shared

import (
	"time"
)

type EdgePackagingJobSummary struct {
	CompilationJobName     *string                    `json:"CompilationJobName"`
	CreationTime           *time.Time                 `json:"CreationTime"`
	EdgePackagingJobArn    string                     `json:"EdgePackagingJobArn"`
	EdgePackagingJobName   string                     `json:"EdgePackagingJobName"`
	EdgePackagingJobStatus EdgePackagingJobStatusEnum `json:"EdgePackagingJobStatus"`
	LastModifiedTime       *time.Time                 `json:"LastModifiedTime"`
	ModelName              *string                    `json:"ModelName"`
	ModelVersion           *string                    `json:"ModelVersion"`
}
