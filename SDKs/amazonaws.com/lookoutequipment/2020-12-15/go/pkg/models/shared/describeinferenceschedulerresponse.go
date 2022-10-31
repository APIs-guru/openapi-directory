package shared

import (
"time")

type DescribeInferenceSchedulerResponse struct {
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    DataDelayOffsetInMinutes *int64 `json:"DataDelayOffsetInMinutes,omitempty"`
    DataInputConfiguration *InferenceInputConfiguration `json:"DataInputConfiguration,omitempty"`
    DataOutputConfiguration *InferenceOutputConfiguration `json:"DataOutputConfiguration,omitempty"`
    DataUploadFrequency *DataUploadFrequencyEnum `json:"DataUploadFrequency,omitempty"`
    InferenceSchedulerArn *string `json:"InferenceSchedulerArn,omitempty"`
    InferenceSchedulerName *string `json:"InferenceSchedulerName,omitempty"`
    ModelArn *string `json:"ModelArn,omitempty"`
    ModelName *string `json:"ModelName,omitempty"`
    RoleArn *string `json:"RoleArn,omitempty"`
    ServerSideKmsKeyID *string `json:"ServerSideKmsKeyId,omitempty"`
    Status *InferenceSchedulerStatusEnum `json:"Status,omitempty"`
    UpdatedAt *time.Time `json:"UpdatedAt,omitempty"`
    
}

