package shared

type PredictResponse struct {
	Metadata          map[string]string   `json:"metadata"`
	Payload           []AnnotationPayload `json:"payload"`
	PreprocessedInput *ExamplePayload     `json:"preprocessedInput"`
}
