package shared

type DetectTextResponse struct {
	TextDetections   []TextDetection `json:"TextDetections"`
	TextModelVersion *string         `json:"TextModelVersion"`
}
