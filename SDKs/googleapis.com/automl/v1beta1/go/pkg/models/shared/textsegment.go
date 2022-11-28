package shared

// TextSegment
// A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding.
type TextSegment struct {
	Content     *string `json:"content,omitempty"`
	EndOffset   *string `json:"endOffset,omitempty"`
	StartOffset *string `json:"startOffset,omitempty"`
}
