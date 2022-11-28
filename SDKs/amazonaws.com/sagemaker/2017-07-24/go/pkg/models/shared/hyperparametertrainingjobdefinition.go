package shared

// HyperParameterTrainingJobDefinition
// Defines the training jobs launched by a hyperparameter tuning job.
type HyperParameterTrainingJobDefinition struct {
	AlgorithmSpecification                HyperParameterAlgorithmSpecification `json:"AlgorithmSpecification"`
	CheckpointConfig                      *CheckpointConfig                    `json:"CheckpointConfig,omitempty"`
	DefinitionName                        *string                              `json:"DefinitionName,omitempty"`
	EnableInterContainerTrafficEncryption *bool                                `json:"EnableInterContainerTrafficEncryption,omitempty"`
	EnableManagedSpotTraining             *bool                                `json:"EnableManagedSpotTraining,omitempty"`
	EnableNetworkIsolation                *bool                                `json:"EnableNetworkIsolation,omitempty"`
	HyperParameterRanges                  *ParameterRanges                     `json:"HyperParameterRanges,omitempty"`
	InputDataConfig                       []Channel                            `json:"InputDataConfig,omitempty"`
	OutputDataConfig                      OutputDataConfig                     `json:"OutputDataConfig"`
	ResourceConfig                        ResourceConfig                       `json:"ResourceConfig"`
	RetryStrategy                         *RetryStrategy                       `json:"RetryStrategy,omitempty"`
	RoleArn                               string                               `json:"RoleArn"`
	StaticHyperParameters                 map[string]string                    `json:"StaticHyperParameters,omitempty"`
	StoppingCondition                     StoppingCondition                    `json:"StoppingCondition"`
	TuningObjective                       *HyperParameterTuningJobObjective    `json:"TuningObjective,omitempty"`
	VpcConfig                             *VpcConfig                           `json:"VpcConfig,omitempty"`
}
