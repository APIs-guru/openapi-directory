package shared

type HyperParameterTrainingJobDefinition struct {
	AlgorithmSpecification                HyperParameterAlgorithmSpecification `json:"AlgorithmSpecification"`
	CheckpointConfig                      *CheckpointConfig                    `json:"CheckpointConfig"`
	DefinitionName                        *string                              `json:"DefinitionName"`
	EnableInterContainerTrafficEncryption *bool                                `json:"EnableInterContainerTrafficEncryption"`
	EnableManagedSpotTraining             *bool                                `json:"EnableManagedSpotTraining"`
	EnableNetworkIsolation                *bool                                `json:"EnableNetworkIsolation"`
	HyperParameterRanges                  *ParameterRanges                     `json:"HyperParameterRanges"`
	InputDataConfig                       []Channel                            `json:"InputDataConfig"`
	OutputDataConfig                      OutputDataConfig                     `json:"OutputDataConfig"`
	ResourceConfig                        ResourceConfig                       `json:"ResourceConfig"`
	RetryStrategy                         *RetryStrategy                       `json:"RetryStrategy"`
	RoleArn                               string                               `json:"RoleArn"`
	StaticHyperParameters                 map[string]string                    `json:"StaticHyperParameters"`
	StoppingCondition                     StoppingCondition                    `json:"StoppingCondition"`
	TuningObjective                       *HyperParameterTuningJobObjective    `json:"TuningObjective"`
	VpcConfig                             *VpcConfig                           `json:"VpcConfig"`
}
