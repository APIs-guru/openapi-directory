package shared

// Lexicon
// Provides lexicon name and lexicon content in string format. For more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon Specification (PLS) Version 1.0</a>.
type Lexicon struct {
	Content *string `json:"Content,omitempty"`
	Name    *string `json:"Name,omitempty"`
}
