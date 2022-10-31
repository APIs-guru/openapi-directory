package shared

type TrainingDataResult struct {
	Input      *TrainingData   `json:"Input,omitempty"`
	Output     *TrainingData   `json:"Output,omitempty"`
	Validation *ValidationData `json:"Validation,omitempty"`
}
