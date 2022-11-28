package shared

// TestingDataResult
// Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
type TestingDataResult struct {
	Input      *TestingData    `json:"Input,omitempty"`
	Output     *TestingData    `json:"Output,omitempty"`
	Validation *ValidationData `json:"Validation,omitempty"`
}
