package shared

// ImageToTextResponse
// Response from an OCR to text operation.  Includes the confience rating and converted text result.
type ImageToTextResponse struct {
	MeanConfidenceLevel *float32 `json:"MeanConfidenceLevel,omitempty"`
	TextResult          *string  `json:"TextResult,omitempty"`
}
