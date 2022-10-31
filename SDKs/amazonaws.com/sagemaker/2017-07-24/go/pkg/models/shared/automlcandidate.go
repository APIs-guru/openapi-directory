package shared

import (
	"time"
)

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
