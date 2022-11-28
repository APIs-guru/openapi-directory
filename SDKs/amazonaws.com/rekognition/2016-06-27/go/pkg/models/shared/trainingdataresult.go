package shared

// TrainingDataResult
// Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
type TrainingDataResult struct {
	Input      *TrainingData   `json:"Input,omitempty"`
	Output     *TrainingData   `json:"Output,omitempty"`
	Validation *ValidationData `json:"Validation,omitempty"`
}
