package shared

import (
"time")

type EdgePackagingJobSummary struct {
    CompilationJobName *string `json:"CompilationJobName,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    EdgePackagingJobArn string `json:"EdgePackagingJobArn"`
    EdgePackagingJobName string `json:"EdgePackagingJobName"`
    EdgePackagingJobStatus EdgePackagingJobStatusEnum `json:"EdgePackagingJobStatus"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    ModelName *string `json:"ModelName,omitempty"`
    ModelVersion *string `json:"ModelVersion,omitempty"`
    
}

