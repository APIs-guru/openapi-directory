package shared

type TextSegment struct {
	Content     *string `json:"content"`
	EndOffset   *string `json:"endOffset"`
	StartOffset *string `json:"startOffset"`
}
