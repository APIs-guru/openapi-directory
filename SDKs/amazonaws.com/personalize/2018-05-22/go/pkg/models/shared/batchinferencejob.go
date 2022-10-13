package shared

import (
	"time"
)

type BatchInferenceJob struct {
	BatchInferenceJobArn    *string                  `json:"batchInferenceJobArn"`
	BatchInferenceJobConfig *BatchInferenceJobConfig `json:"batchInferenceJobConfig"`
	CreationDateTime        *time.Time               `json:"creationDateTime"`
	FailureReason           *string                  `json:"failureReason"`
	FilterArn               *string                  `json:"filterArn"`
	JobInput                *BatchInferenceJobInput  `json:"jobInput"`
	JobName                 *string                  `json:"jobName"`
	JobOutput               *BatchInferenceJobOutput `json:"jobOutput"`
	LastUpdatedDateTime     *time.Time               `json:"lastUpdatedDateTime"`
	NumResults              *int64                   `json:"numResults"`
	RoleArn                 *string                  `json:"roleArn"`
	SolutionVersionArn      *string                  `json:"solutionVersionArn"`
	Status                  *string                  `json:"status"`
}
