package shared

type PredictRequest struct {
	Params  map[string]string `json:"params,omitempty"`
	Payload *ExamplePayload   `json:"payload,omitempty"`
}
