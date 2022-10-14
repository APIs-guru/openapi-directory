package shared

import (
	"time"
)

type DescribeTrainingJobResponse struct {
	AlgorithmSpecification                AlgorithmSpecification         `json:"AlgorithmSpecification"`
	AutoMlJobArn                          *string                        `json:"AutoMLJobArn,omitempty"`
	BillableTimeInSeconds                 *int64                         `json:"BillableTimeInSeconds,omitempty"`
	CheckpointConfig                      *CheckpointConfig              `json:"CheckpointConfig,omitempty"`
	CreationTime                          time.Time                      `json:"CreationTime"`
	DebugHookConfig                       *DebugHookConfig               `json:"DebugHookConfig,omitempty"`
	DebugRuleConfigurations               []DebugRuleConfiguration       `json:"DebugRuleConfigurations,omitempty"`
	DebugRuleEvaluationStatuses           []DebugRuleEvaluationStatus    `json:"DebugRuleEvaluationStatuses,omitempty"`
	EnableInterContainerTrafficEncryption *bool                          `json:"EnableInterContainerTrafficEncryption,omitempty"`
	EnableManagedSpotTraining             *bool                          `json:"EnableManagedSpotTraining,omitempty"`
	EnableNetworkIsolation                *bool                          `json:"EnableNetworkIsolation,omitempty"`
	Environment                           map[string]string              `json:"Environment,omitempty"`
	ExperimentConfig                      *ExperimentConfig              `json:"ExperimentConfig,omitempty"`
	FailureReason                         *string                        `json:"FailureReason,omitempty"`
	FinalMetricDataList                   []MetricData                   `json:"FinalMetricDataList,omitempty"`
	HyperParameters                       map[string]string              `json:"HyperParameters,omitempty"`
	InputDataConfig                       []Channel                      `json:"InputDataConfig,omitempty"`
	LabelingJobArn                        *string                        `json:"LabelingJobArn,omitempty"`
	LastModifiedTime                      *time.Time                     `json:"LastModifiedTime,omitempty"`
	ModelArtifacts                        ModelArtifacts                 `json:"ModelArtifacts"`
	OutputDataConfig                      *OutputDataConfig              `json:"OutputDataConfig,omitempty"`
	ProfilerConfig                        *ProfilerConfig                `json:"ProfilerConfig,omitempty"`
	ProfilerRuleConfigurations            []ProfilerRuleConfiguration    `json:"ProfilerRuleConfigurations,omitempty"`
	ProfilerRuleEvaluationStatuses        []ProfilerRuleEvaluationStatus `json:"ProfilerRuleEvaluationStatuses,omitempty"`
	ProfilingStatus                       *ProfilingStatusEnum           `json:"ProfilingStatus,omitempty"`
	ResourceConfig                        ResourceConfig                 `json:"ResourceConfig"`
	RetryStrategy                         *RetryStrategy                 `json:"RetryStrategy,omitempty"`
	RoleArn                               *string                        `json:"RoleArn,omitempty"`
	SecondaryStatus                       SecondaryStatusEnum            `json:"SecondaryStatus"`
	SecondaryStatusTransitions            []SecondaryStatusTransition    `json:"SecondaryStatusTransitions,omitempty"`
	StoppingCondition                     StoppingCondition              `json:"StoppingCondition"`
	TensorBoardOutputConfig               *TensorBoardOutputConfig       `json:"TensorBoardOutputConfig,omitempty"`
	TrainingEndTime                       *time.Time                     `json:"TrainingEndTime,omitempty"`
	TrainingJobArn                        string                         `json:"TrainingJobArn"`
	TrainingJobName                       string                         `json:"TrainingJobName"`
	TrainingJobStatus                     TrainingJobStatusEnum          `json:"TrainingJobStatus"`
	TrainingStartTime                     *time.Time                     `json:"TrainingStartTime,omitempty"`
	TrainingTimeInSeconds                 *int64                         `json:"TrainingTimeInSeconds,omitempty"`
	TuningJobArn                          *string                        `json:"TuningJobArn,omitempty"`
	VpcConfig                             *VpcConfig                     `json:"VpcConfig,omitempty"`
}
