package shared

// PredictRequest
// Request message for PredictionService.Predict.
type PredictRequest struct {
	Params  map[string]string `json:"params,omitempty"`
	Payload *ExamplePayload   `json:"payload,omitempty"`
}
