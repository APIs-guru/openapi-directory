package shared

type ListLexiconsOutput struct {
	Lexicons  []LexiconDescription `json:"Lexicons"`
	NextToken *string              `json:"NextToken"`
}
