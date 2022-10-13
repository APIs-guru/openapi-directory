package shared

import (
	"time"
)

type InferenceExecutionSummary struct {
	CustomerResultObject    *S3Object                     `json:"CustomerResultObject"`
	DataEndTime             *time.Time                    `json:"DataEndTime"`
	DataInputConfiguration  *InferenceInputConfiguration  `json:"DataInputConfiguration"`
	DataOutputConfiguration *InferenceOutputConfiguration `json:"DataOutputConfiguration"`
	DataStartTime           *time.Time                    `json:"DataStartTime"`
	FailedReason            *string                       `json:"FailedReason"`
	InferenceSchedulerArn   *string                       `json:"InferenceSchedulerArn"`
	InferenceSchedulerName  *string                       `json:"InferenceSchedulerName"`
	ModelArn                *string                       `json:"ModelArn"`
	ModelName               *string                       `json:"ModelName"`
	ScheduledStartTime      *time.Time                    `json:"ScheduledStartTime"`
	Status                  *InferenceExecutionStatusEnum `json:"Status"`
}
