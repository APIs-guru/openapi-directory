package shared

import (
	"time"
)

type ListInferenceExecutionsRequest struct {
	DataEndTimeBefore      *time.Time                    `json:"DataEndTimeBefore"`
	DataStartTimeAfter     *time.Time                    `json:"DataStartTimeAfter"`
	InferenceSchedulerName string                        `json:"InferenceSchedulerName"`
	MaxResults             *int64                        `json:"MaxResults"`
	NextToken              *string                       `json:"NextToken"`
	Status                 *InferenceExecutionStatusEnum `json:"Status"`
}
