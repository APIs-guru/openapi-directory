package shared

import (
	"time"
)

type TrainingJob struct {
	AlgorithmSpecification                *AlgorithmSpecification     `json:"AlgorithmSpecification"`
	AutoMlJobArn                          *string                     `json:"AutoMLJobArn"`
	BillableTimeInSeconds                 *int64                      `json:"BillableTimeInSeconds"`
	CheckpointConfig                      *CheckpointConfig           `json:"CheckpointConfig"`
	CreationTime                          *time.Time                  `json:"CreationTime"`
	DebugHookConfig                       *DebugHookConfig            `json:"DebugHookConfig"`
	DebugRuleConfigurations               []DebugRuleConfiguration    `json:"DebugRuleConfigurations"`
	DebugRuleEvaluationStatuses           []DebugRuleEvaluationStatus `json:"DebugRuleEvaluationStatuses"`
	EnableInterContainerTrafficEncryption *bool                       `json:"EnableInterContainerTrafficEncryption"`
	EnableManagedSpotTraining             *bool                       `json:"EnableManagedSpotTraining"`
	EnableNetworkIsolation                *bool                       `json:"EnableNetworkIsolation"`
	Environment                           map[string]string           `json:"Environment"`
	ExperimentConfig                      *ExperimentConfig           `json:"ExperimentConfig"`
	FailureReason                         *string                     `json:"FailureReason"`
	FinalMetricDataList                   []MetricData                `json:"FinalMetricDataList"`
	HyperParameters                       map[string]string           `json:"HyperParameters"`
	InputDataConfig                       []Channel                   `json:"InputDataConfig"`
	LabelingJobArn                        *string                     `json:"LabelingJobArn"`
	LastModifiedTime                      *time.Time                  `json:"LastModifiedTime"`
	ModelArtifacts                        *ModelArtifacts             `json:"ModelArtifacts"`
	OutputDataConfig                      *OutputDataConfig           `json:"OutputDataConfig"`
	ResourceConfig                        *ResourceConfig             `json:"ResourceConfig"`
	RetryStrategy                         *RetryStrategy              `json:"RetryStrategy"`
	RoleArn                               *string                     `json:"RoleArn"`
	SecondaryStatus                       *SecondaryStatusEnum        `json:"SecondaryStatus"`
	SecondaryStatusTransitions            []SecondaryStatusTransition `json:"SecondaryStatusTransitions"`
	StoppingCondition                     *StoppingCondition          `json:"StoppingCondition"`
	Tags                                  []Tag                       `json:"Tags"`
	TensorBoardOutputConfig               *TensorBoardOutputConfig    `json:"TensorBoardOutputConfig"`
	TrainingEndTime                       *time.Time                  `json:"TrainingEndTime"`
	TrainingJobArn                        *string                     `json:"TrainingJobArn"`
	TrainingJobName                       *string                     `json:"TrainingJobName"`
	TrainingJobStatus                     *TrainingJobStatusEnum      `json:"TrainingJobStatus"`
	TrainingStartTime                     *time.Time                  `json:"TrainingStartTime"`
	TrainingTimeInSeconds                 *int64                      `json:"TrainingTimeInSeconds"`
	TuningJobArn                          *string                     `json:"TuningJobArn"`
	VpcConfig                             *VpcConfig                  `json:"VpcConfig"`
}
