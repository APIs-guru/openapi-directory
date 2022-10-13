package shared

type TestingDataResult struct {
	Input      *TestingData    `json:"Input"`
	Output     *TestingData    `json:"Output"`
	Validation *ValidationData `json:"Validation"`
}
