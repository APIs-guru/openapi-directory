package shared

import (
	"time"
)

type BatchInferenceJobSummary struct {
	BatchInferenceJobArn *string    `json:"batchInferenceJobArn"`
	CreationDateTime     *time.Time `json:"creationDateTime"`
	FailureReason        *string    `json:"failureReason"`
	JobName              *string    `json:"jobName"`
	LastUpdatedDateTime  *time.Time `json:"lastUpdatedDateTime"`
	SolutionVersionArn   *string    `json:"solutionVersionArn"`
	Status               *string    `json:"status"`
}
