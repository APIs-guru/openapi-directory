package shared

import (
	"time"
)

type DescribeAutoMlJobResponse struct {
	AutoMlJobArn                     string                       `json:"AutoMLJobArn"`
	AutoMlJobArtifacts               *AutoMlJobArtifacts          `json:"AutoMLJobArtifacts"`
	AutoMlJobConfig                  *AutoMlJobConfig             `json:"AutoMLJobConfig"`
	AutoMlJobName                    string                       `json:"AutoMLJobName"`
	AutoMlJobObjective               *AutoMlJobObjective          `json:"AutoMLJobObjective"`
	AutoMlJobSecondaryStatus         AutoMlJobSecondaryStatusEnum `json:"AutoMLJobSecondaryStatus"`
	AutoMlJobStatus                  AutoMlJobStatusEnum          `json:"AutoMLJobStatus"`
	BestCandidate                    *AutoMlCandidate             `json:"BestCandidate"`
	CreationTime                     time.Time                    `json:"CreationTime"`
	EndTime                          *time.Time                   `json:"EndTime"`
	FailureReason                    *string                      `json:"FailureReason"`
	GenerateCandidateDefinitionsOnly *bool                        `json:"GenerateCandidateDefinitionsOnly"`
	InputDataConfig                  []AutoMlChannel              `json:"InputDataConfig"`
	LastModifiedTime                 time.Time                    `json:"LastModifiedTime"`
	ModelDeployConfig                *ModelDeployConfig           `json:"ModelDeployConfig"`
	ModelDeployResult                *ModelDeployResult           `json:"ModelDeployResult"`
	OutputDataConfig                 AutoMlOutputDataConfig       `json:"OutputDataConfig"`
	PartialFailureReasons            []AutoMlPartialFailureReason `json:"PartialFailureReasons"`
	ProblemType                      *ProblemTypeEnum             `json:"ProblemType"`
	ResolvedAttributes               *ResolvedAttributes          `json:"ResolvedAttributes"`
	RoleArn                          string                       `json:"RoleArn"`
}
