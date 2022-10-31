package shared

import (
"time")

type DescribeAutoMlJobResponse struct {
    AutoMlJobArn string `json:"AutoMLJobArn"`
    AutoMlJobArtifacts *AutoMlJobArtifacts `json:"AutoMLJobArtifacts,omitempty"`
    AutoMlJobConfig *AutoMlJobConfig `json:"AutoMLJobConfig,omitempty"`
    AutoMlJobName string `json:"AutoMLJobName"`
    AutoMlJobObjective *AutoMlJobObjective `json:"AutoMLJobObjective,omitempty"`
    AutoMlJobSecondaryStatus AutoMlJobSecondaryStatusEnum `json:"AutoMLJobSecondaryStatus"`
    AutoMlJobStatus AutoMlJobStatusEnum `json:"AutoMLJobStatus"`
    BestCandidate *AutoMlCandidate `json:"BestCandidate,omitempty"`
    CreationTime time.Time `json:"CreationTime"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    GenerateCandidateDefinitionsOnly *bool `json:"GenerateCandidateDefinitionsOnly,omitempty"`
    InputDataConfig []AutoMlChannel `json:"InputDataConfig"`
    LastModifiedTime time.Time `json:"LastModifiedTime"`
    ModelDeployConfig *ModelDeployConfig `json:"ModelDeployConfig,omitempty"`
    ModelDeployResult *ModelDeployResult `json:"ModelDeployResult,omitempty"`
    OutputDataConfig AutoMlOutputDataConfig `json:"OutputDataConfig"`
    PartialFailureReasons []AutoMlPartialFailureReason `json:"PartialFailureReasons,omitempty"`
    ProblemType *ProblemTypeEnum `json:"ProblemType,omitempty"`
    ResolvedAttributes *ResolvedAttributes `json:"ResolvedAttributes,omitempty"`
    RoleArn string `json:"RoleArn"`
    
}

