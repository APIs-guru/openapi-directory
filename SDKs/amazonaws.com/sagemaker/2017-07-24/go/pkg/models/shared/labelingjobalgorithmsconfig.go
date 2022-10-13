package shared

type LabelingJobAlgorithmsConfig struct {
	InitialActiveLearningModelArn        *string                    `json:"InitialActiveLearningModelArn"`
	LabelingJobAlgorithmSpecificationArn string                     `json:"LabelingJobAlgorithmSpecificationArn"`
	LabelingJobResourceConfig            *LabelingJobResourceConfig `json:"LabelingJobResourceConfig"`
}
