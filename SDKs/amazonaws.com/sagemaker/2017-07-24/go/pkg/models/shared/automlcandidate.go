package shared

import (
	"time"
)

// AutoMlCandidate
// Information about a candidate produced by an AutoML training job, including its status, steps, and other properties.
type AutoMlCandidate struct {
	CandidateName                 string                         `json:"CandidateName"`
	CandidateProperties           *CandidateProperties           `json:"CandidateProperties,omitempty"`
	CandidateStatus               CandidateStatusEnum            `json:"CandidateStatus"`
	CandidateSteps                []AutoMlCandidateStep          `json:"CandidateSteps"`
	CreationTime                  time.Time                      `json:"CreationTime"`
	EndTime                       *time.Time                     `json:"EndTime,omitempty"`
	FailureReason                 *string                        `json:"FailureReason,omitempty"`
	FinalAutoMlJobObjectiveMetric *FinalAutoMlJobObjectiveMetric `json:"FinalAutoMLJobObjectiveMetric,omitempty"`
	InferenceContainers           []AutoMlContainerDefinition    `json:"InferenceContainers,omitempty"`
	LastModifiedTime              time.Time                      `json:"LastModifiedTime"`
	ObjectiveStatus               ObjectiveStatusEnum            `json:"ObjectiveStatus"`
}
