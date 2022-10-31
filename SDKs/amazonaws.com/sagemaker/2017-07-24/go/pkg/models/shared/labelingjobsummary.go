package shared

import (
	"time"
)

type LabelingJobSummary struct {
	AnnotationConsolidationLambdaArn *string                 `json:"AnnotationConsolidationLambdaArn,omitempty"`
	CreationTime                     time.Time               `json:"CreationTime"`
	FailureReason                    *string                 `json:"FailureReason,omitempty"`
	InputConfig                      *LabelingJobInputConfig `json:"InputConfig,omitempty"`
	LabelCounters                    LabelCounters           `json:"LabelCounters"`
	LabelingJobArn                   string                  `json:"LabelingJobArn"`
	LabelingJobName                  string                  `json:"LabelingJobName"`
	LabelingJobOutput                *LabelingJobOutput      `json:"LabelingJobOutput,omitempty"`
	LabelingJobStatus                LabelingJobStatusEnum   `json:"LabelingJobStatus"`
	LastModifiedTime                 time.Time               `json:"LastModifiedTime"`
	PreHumanTaskLambdaArn            string                  `json:"PreHumanTaskLambdaArn"`
	WorkteamArn                      string                  `json:"WorkteamArn"`
}
