package shared

import (
	"time"
)

type AutoMlCandidate struct {
	CandidateName                 string                         `json:"CandidateName"`
	CandidateProperties           *CandidateProperties           `json:"CandidateProperties"`
	CandidateStatus               CandidateStatusEnum            `json:"CandidateStatus"`
	CandidateSteps                []AutoMlCandidateStep          `json:"CandidateSteps"`
	CreationTime                  time.Time                      `json:"CreationTime"`
	EndTime                       *time.Time                     `json:"EndTime"`
	FailureReason                 *string                        `json:"FailureReason"`
	FinalAutoMlJobObjectiveMetric *FinalAutoMlJobObjectiveMetric `json:"FinalAutoMLJobObjectiveMetric"`
	InferenceContainers           []AutoMlContainerDefinition    `json:"InferenceContainers"`
	LastModifiedTime              time.Time                      `json:"LastModifiedTime"`
	ObjectiveStatus               ObjectiveStatusEnum            `json:"ObjectiveStatus"`
}
