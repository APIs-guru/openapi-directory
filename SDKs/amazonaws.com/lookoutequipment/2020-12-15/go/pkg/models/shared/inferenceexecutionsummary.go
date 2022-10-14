package shared

import (
	"time"
)

type InferenceExecutionSummary struct {
	CustomerResultObject    *S3Object                     `json:"CustomerResultObject,omitempty"`
	DataEndTime             *time.Time                    `json:"DataEndTime,omitempty"`
	DataInputConfiguration  *InferenceInputConfiguration  `json:"DataInputConfiguration,omitempty"`
	DataOutputConfiguration *InferenceOutputConfiguration `json:"DataOutputConfiguration,omitempty"`
	DataStartTime           *time.Time                    `json:"DataStartTime,omitempty"`
	FailedReason            *string                       `json:"FailedReason,omitempty"`
	InferenceSchedulerArn   *string                       `json:"InferenceSchedulerArn,omitempty"`
	InferenceSchedulerName  *string                       `json:"InferenceSchedulerName,omitempty"`
	ModelArn                *string                       `json:"ModelArn,omitempty"`
	ModelName               *string                       `json:"ModelName,omitempty"`
	ScheduledStartTime      *time.Time                    `json:"ScheduledStartTime,omitempty"`
	Status                  *InferenceExecutionStatusEnum `json:"Status,omitempty"`
}
