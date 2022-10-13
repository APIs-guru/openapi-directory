package shared

type CreateTrainingJobRequest struct {
	AlgorithmSpecification                AlgorithmSpecification      `json:"AlgorithmSpecification"`
	CheckpointConfig                      *CheckpointConfig           `json:"CheckpointConfig"`
	DebugHookConfig                       *DebugHookConfig            `json:"DebugHookConfig"`
	DebugRuleConfigurations               []DebugRuleConfiguration    `json:"DebugRuleConfigurations"`
	EnableInterContainerTrafficEncryption *bool                       `json:"EnableInterContainerTrafficEncryption"`
	EnableManagedSpotTraining             *bool                       `json:"EnableManagedSpotTraining"`
	EnableNetworkIsolation                *bool                       `json:"EnableNetworkIsolation"`
	Environment                           map[string]string           `json:"Environment"`
	ExperimentConfig                      *ExperimentConfig           `json:"ExperimentConfig"`
	HyperParameters                       map[string]string           `json:"HyperParameters"`
	InputDataConfig                       []Channel                   `json:"InputDataConfig"`
	OutputDataConfig                      OutputDataConfig            `json:"OutputDataConfig"`
	ProfilerConfig                        *ProfilerConfig             `json:"ProfilerConfig"`
	ProfilerRuleConfigurations            []ProfilerRuleConfiguration `json:"ProfilerRuleConfigurations"`
	ResourceConfig                        ResourceConfig              `json:"ResourceConfig"`
	RetryStrategy                         *RetryStrategy              `json:"RetryStrategy"`
	RoleArn                               string                      `json:"RoleArn"`
	StoppingCondition                     StoppingCondition           `json:"StoppingCondition"`
	Tags                                  []Tag                       `json:"Tags"`
	TensorBoardOutputConfig               *TensorBoardOutputConfig    `json:"TensorBoardOutputConfig"`
	TrainingJobName                       string                      `json:"TrainingJobName"`
	VpcConfig                             *VpcConfig                  `json:"VpcConfig"`
}
