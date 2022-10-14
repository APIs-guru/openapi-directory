package shared

type TestingDataResult struct {
	Input      *TestingData    `json:"Input,omitempty"`
	Output     *TestingData    `json:"Output,omitempty"`
	Validation *ValidationData `json:"Validation,omitempty"`
}
