package shared

type CreateTrainingJobRequest struct {
	AlgorithmSpecification                AlgorithmSpecification      `json:"AlgorithmSpecification"`
	CheckpointConfig                      *CheckpointConfig           `json:"CheckpointConfig,omitempty"`
	DebugHookConfig                       *DebugHookConfig            `json:"DebugHookConfig,omitempty"`
	DebugRuleConfigurations               []DebugRuleConfiguration    `json:"DebugRuleConfigurations,omitempty"`
	EnableInterContainerTrafficEncryption *bool                       `json:"EnableInterContainerTrafficEncryption,omitempty"`
	EnableManagedSpotTraining             *bool                       `json:"EnableManagedSpotTraining,omitempty"`
	EnableNetworkIsolation                *bool                       `json:"EnableNetworkIsolation,omitempty"`
	Environment                           map[string]string           `json:"Environment,omitempty"`
	ExperimentConfig                      *ExperimentConfig           `json:"ExperimentConfig,omitempty"`
	HyperParameters                       map[string]string           `json:"HyperParameters,omitempty"`
	InputDataConfig                       []Channel                   `json:"InputDataConfig,omitempty"`
	OutputDataConfig                      OutputDataConfig            `json:"OutputDataConfig"`
	ProfilerConfig                        *ProfilerConfig             `json:"ProfilerConfig,omitempty"`
	ProfilerRuleConfigurations            []ProfilerRuleConfiguration `json:"ProfilerRuleConfigurations,omitempty"`
	ResourceConfig                        ResourceConfig              `json:"ResourceConfig"`
	RetryStrategy                         *RetryStrategy              `json:"RetryStrategy,omitempty"`
	RoleArn                               string                      `json:"RoleArn"`
	StoppingCondition                     StoppingCondition           `json:"StoppingCondition"`
	Tags                                  []Tag                       `json:"Tags,omitempty"`
	TensorBoardOutputConfig               *TensorBoardOutputConfig    `json:"TensorBoardOutputConfig,omitempty"`
	TrainingJobName                       string                      `json:"TrainingJobName"`
	VpcConfig                             *VpcConfig                  `json:"VpcConfig,omitempty"`
}
