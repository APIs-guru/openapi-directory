package shared

import (
	"time"
)

type LabelingJobSummary struct {
	AnnotationConsolidationLambdaArn *string                 `json:"AnnotationConsolidationLambdaArn"`
	CreationTime                     time.Time               `json:"CreationTime"`
	FailureReason                    *string                 `json:"FailureReason"`
	InputConfig                      *LabelingJobInputConfig `json:"InputConfig"`
	LabelCounters                    LabelCounters           `json:"LabelCounters"`
	LabelingJobArn                   string                  `json:"LabelingJobArn"`
	LabelingJobName                  string                  `json:"LabelingJobName"`
	LabelingJobOutput                *LabelingJobOutput      `json:"LabelingJobOutput"`
	LabelingJobStatus                LabelingJobStatusEnum   `json:"LabelingJobStatus"`
	LastModifiedTime                 time.Time               `json:"LastModifiedTime"`
	PreHumanTaskLambdaArn            string                  `json:"PreHumanTaskLambdaArn"`
	WorkteamArn                      string                  `json:"WorkteamArn"`
}
