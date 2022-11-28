package shared

// TextDetectionResult
// Information about text detected in a video. Incudes the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen.
type TextDetectionResult struct {
	TextDetection *TextDetection `json:"TextDetection,omitempty"`
	Timestamp     *int64         `json:"Timestamp,omitempty"`
}
