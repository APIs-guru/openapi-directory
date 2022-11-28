package shared

// TextExtractionAnnotation
// Annotation for identifying spans of text.
type TextExtractionAnnotation struct {
	Score       *float32     `json:"score,omitempty"`
	TextSegment *TextSegment `json:"textSegment,omitempty"`
}
