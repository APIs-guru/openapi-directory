package shared

// LexiconDescription
// Describes the content of the lexicon.
type LexiconDescription struct {
	Attributes *LexiconAttributes `json:"Attributes,omitempty"`
	Name       *string            `json:"Name,omitempty"`
}
