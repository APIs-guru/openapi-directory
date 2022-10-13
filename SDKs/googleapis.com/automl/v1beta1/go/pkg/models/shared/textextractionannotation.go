package shared

type TextExtractionAnnotation struct {
	Score       *float32     `json:"score"`
	TextSegment *TextSegment `json:"textSegment"`
}
