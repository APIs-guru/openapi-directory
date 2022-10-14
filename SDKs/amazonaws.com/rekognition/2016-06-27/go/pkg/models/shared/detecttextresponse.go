package shared

type DetectTextResponse struct {
	TextDetections   []TextDetection `json:"TextDetections,omitempty"`
	TextModelVersion *string         `json:"TextModelVersion,omitempty"`
}
