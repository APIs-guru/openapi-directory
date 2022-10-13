package shared

type CreateHyperParameterTuningJobRequest struct {
	HyperParameterTuningJobConfig HyperParameterTuningJobConfig           `json:"HyperParameterTuningJobConfig"`
	HyperParameterTuningJobName   string                                  `json:"HyperParameterTuningJobName"`
	Tags                          []Tag                                   `json:"Tags"`
	TrainingJobDefinition         *HyperParameterTrainingJobDefinition    `json:"TrainingJobDefinition"`
	TrainingJobDefinitions        []HyperParameterTrainingJobDefinition   `json:"TrainingJobDefinitions"`
	WarmStartConfig               *HyperParameterTuningJobWarmStartConfig `json:"WarmStartConfig"`
}
