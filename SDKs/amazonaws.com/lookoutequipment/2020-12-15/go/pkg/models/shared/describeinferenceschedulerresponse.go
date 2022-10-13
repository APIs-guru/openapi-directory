package shared

import (
	"time"
)

type DescribeInferenceSchedulerResponse struct {
	CreatedAt                *time.Time                    `json:"CreatedAt"`
	DataDelayOffsetInMinutes *int64                        `json:"DataDelayOffsetInMinutes"`
	DataInputConfiguration   *InferenceInputConfiguration  `json:"DataInputConfiguration"`
	DataOutputConfiguration  *InferenceOutputConfiguration `json:"DataOutputConfiguration"`
	DataUploadFrequency      *DataUploadFrequencyEnum      `json:"DataUploadFrequency"`
	InferenceSchedulerArn    *string                       `json:"InferenceSchedulerArn"`
	InferenceSchedulerName   *string                       `json:"InferenceSchedulerName"`
	ModelArn                 *string                       `json:"ModelArn"`
	ModelName                *string                       `json:"ModelName"`
	RoleArn                  *string                       `json:"RoleArn"`
	ServerSideKmsKeyID       *string                       `json:"ServerSideKmsKeyId"`
	Status                   *InferenceSchedulerStatusEnum `json:"Status"`
	UpdatedAt                *time.Time                    `json:"UpdatedAt"`
}
