package shared

type TrainingDataResult struct {
	Input      *TrainingData   `json:"Input"`
	Output     *TrainingData   `json:"Output"`
	Validation *ValidationData `json:"Validation"`
}
