package shared

import (
	"time"
)

type DescribeMailboxExportJobResponse struct {
	Description       *string                    `json:"Description"`
	EndTime           *time.Time                 `json:"EndTime"`
	EntityID          *string                    `json:"EntityId"`
	ErrorInfo         *string                    `json:"ErrorInfo"`
	EstimatedProgress *int64                     `json:"EstimatedProgress"`
	KmsKeyArn         *string                    `json:"KmsKeyArn"`
	RoleArn           *string                    `json:"RoleArn"`
	S3BucketName      *string                    `json:"S3BucketName"`
	S3Path            *string                    `json:"S3Path"`
	S3Prefix          *string                    `json:"S3Prefix"`
	StartTime         *time.Time                 `json:"StartTime"`
	State             *MailboxExportJobStateEnum `json:"State"`
}
