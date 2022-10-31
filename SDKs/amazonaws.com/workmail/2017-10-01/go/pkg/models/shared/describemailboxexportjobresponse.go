package shared

import (
"time")

type DescribeMailboxExportJobResponse struct {
    Description *string `json:"Description,omitempty"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    EntityID *string `json:"EntityId,omitempty"`
    ErrorInfo *string `json:"ErrorInfo,omitempty"`
    EstimatedProgress *int64 `json:"EstimatedProgress,omitempty"`
    KmsKeyArn *string `json:"KmsKeyArn,omitempty"`
    RoleArn *string `json:"RoleArn,omitempty"`
    S3BucketName *string `json:"S3BucketName,omitempty"`
    S3Path *string `json:"S3Path,omitempty"`
    S3Prefix *string `json:"S3Prefix,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    State *MailboxExportJobStateEnum `json:"State,omitempty"`
    
}

