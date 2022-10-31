package shared



type LabelingJobAlgorithmsConfig struct {
    InitialActiveLearningModelArn *string `json:"InitialActiveLearningModelArn,omitempty"`
    LabelingJobAlgorithmSpecificationArn string `json:"LabelingJobAlgorithmSpecificationArn"`
    LabelingJobResourceConfig *LabelingJobResourceConfig `json:"LabelingJobResourceConfig,omitempty"`
    
}

