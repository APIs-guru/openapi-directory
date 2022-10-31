package shared



type CreateHyperParameterTuningJobRequest struct {
    HyperParameterTuningJobConfig HyperParameterTuningJobConfig `json:"HyperParameterTuningJobConfig"`
    HyperParameterTuningJobName string `json:"HyperParameterTuningJobName"`
    Tags []Tag `json:"Tags,omitempty"`
    TrainingJobDefinition *HyperParameterTrainingJobDefinition `json:"TrainingJobDefinition,omitempty"`
    TrainingJobDefinitions []HyperParameterTrainingJobDefinition `json:"TrainingJobDefinitions,omitempty"`
    WarmStartConfig *HyperParameterTuningJobWarmStartConfig `json:"WarmStartConfig,omitempty"`
    
}

