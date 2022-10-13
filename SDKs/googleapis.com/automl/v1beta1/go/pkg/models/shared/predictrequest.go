package shared

type PredictRequest struct {
	Params  map[string]string `json:"params"`
	Payload *ExamplePayload   `json:"payload"`
}
