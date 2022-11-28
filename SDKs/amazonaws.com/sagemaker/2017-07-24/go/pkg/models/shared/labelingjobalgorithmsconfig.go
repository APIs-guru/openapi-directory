package shared

// LabelingJobAlgorithmsConfig
// Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling.
type LabelingJobAlgorithmsConfig struct {
	InitialActiveLearningModelArn        *string                    `json:"InitialActiveLearningModelArn,omitempty"`
	LabelingJobAlgorithmSpecificationArn string                     `json:"LabelingJobAlgorithmSpecificationArn"`
	LabelingJobResourceConfig            *LabelingJobResourceConfig `json:"LabelingJobResourceConfig,omitempty"`
}
