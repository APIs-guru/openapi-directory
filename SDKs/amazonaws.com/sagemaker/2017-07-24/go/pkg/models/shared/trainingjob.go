package shared

import (
"time")

type TrainingJob struct {
    AlgorithmSpecification *AlgorithmSpecification `json:"AlgorithmSpecification,omitempty"`
    AutoMlJobArn *string `json:"AutoMLJobArn,omitempty"`
    BillableTimeInSeconds *int64 `json:"BillableTimeInSeconds,omitempty"`
    CheckpointConfig *CheckpointConfig `json:"CheckpointConfig,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DebugHookConfig *DebugHookConfig `json:"DebugHookConfig,omitempty"`
    DebugRuleConfigurations []DebugRuleConfiguration `json:"DebugRuleConfigurations,omitempty"`
    DebugRuleEvaluationStatuses []DebugRuleEvaluationStatus `json:"DebugRuleEvaluationStatuses,omitempty"`
    EnableInterContainerTrafficEncryption *bool `json:"EnableInterContainerTrafficEncryption,omitempty"`
    EnableManagedSpotTraining *bool `json:"EnableManagedSpotTraining,omitempty"`
    EnableNetworkIsolation *bool `json:"EnableNetworkIsolation,omitempty"`
    Environment map[string]string `json:"Environment,omitempty"`
    ExperimentConfig *ExperimentConfig `json:"ExperimentConfig,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    FinalMetricDataList []MetricData `json:"FinalMetricDataList,omitempty"`
    HyperParameters map[string]string `json:"HyperParameters,omitempty"`
    InputDataConfig []Channel `json:"InputDataConfig,omitempty"`
    LabelingJobArn *string `json:"LabelingJobArn,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    ModelArtifacts *ModelArtifacts `json:"ModelArtifacts,omitempty"`
    OutputDataConfig *OutputDataConfig `json:"OutputDataConfig,omitempty"`
    ResourceConfig *ResourceConfig `json:"ResourceConfig,omitempty"`
    RetryStrategy *RetryStrategy `json:"RetryStrategy,omitempty"`
    RoleArn *string `json:"RoleArn,omitempty"`
    SecondaryStatus *SecondaryStatusEnum `json:"SecondaryStatus,omitempty"`
    SecondaryStatusTransitions []SecondaryStatusTransition `json:"SecondaryStatusTransitions,omitempty"`
    StoppingCondition *StoppingCondition `json:"StoppingCondition,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    TensorBoardOutputConfig *TensorBoardOutputConfig `json:"TensorBoardOutputConfig,omitempty"`
    TrainingEndTime *time.Time `json:"TrainingEndTime,omitempty"`
    TrainingJobArn *string `json:"TrainingJobArn,omitempty"`
    TrainingJobName *string `json:"TrainingJobName,omitempty"`
    TrainingJobStatus *TrainingJobStatusEnum `json:"TrainingJobStatus,omitempty"`
    TrainingStartTime *time.Time `json:"TrainingStartTime,omitempty"`
    TrainingTimeInSeconds *int64 `json:"TrainingTimeInSeconds,omitempty"`
    TuningJobArn *string `json:"TuningJobArn,omitempty"`
    VpcConfig *VpcConfig `json:"VpcConfig,omitempty"`
    
}

