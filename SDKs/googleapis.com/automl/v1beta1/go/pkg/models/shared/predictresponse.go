package shared

// PredictResponse
// Response message for PredictionService.Predict.
type PredictResponse struct {
	Metadata          map[string]string   `json:"metadata,omitempty"`
	Payload           []AnnotationPayload `json:"payload,omitempty"`
	PreprocessedInput *ExamplePayload     `json:"preprocessedInput,omitempty"`
}
