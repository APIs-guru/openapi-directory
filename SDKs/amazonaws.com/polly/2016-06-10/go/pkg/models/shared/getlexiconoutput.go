package shared

type GetLexiconOutput struct {
	Lexicon           *Lexicon           `json:"Lexicon"`
	LexiconAttributes *LexiconAttributes `json:"LexiconAttributes"`
}
